import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core'
import { MatSnackBar } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { Subscription } from 'rxjs'

import { environment } from '../../../environments/environment'
import { Doc } from '../../core/Doc'
import { BotStorageService } from '../../core/storage/bot/bot-storage.service'
import { UiService } from '../../core/ui/ui.service'
import { DocService } from '../doc.service'
import { LogsService } from '../logs/logs.service'
import { NetworkService } from '../network'

@Component({
  selector: 'mute-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnDestroy {
  @Output()
  menu: EventEmitter<void>
  @Output()
  info: EventEmitter<void>
  @ViewChild('input')
  input: ElementRef
  @ViewChild('debugDownload')
  debugDownload: ElementRef

  public botNotAvailable: boolean
  public doc: Doc
  public debug: boolean

  private subs: Subscription[]
  private digest: string

  constructor(
    public docService: DocService,
    private sanitizer: DomSanitizer,
    private network: NetworkService,
    private botStorage: BotStorageService,
    private snackBar: MatSnackBar,
    private ui: UiService,
    private logs: LogsService
  ) {
    this.debug = environment.debug.visible
    log.debug('is debug: ', this.debug)
    this.menu = new EventEmitter()
    this.info = new EventEmitter()
    this.doc = docService.doc
    this.botNotAvailable = true
    this.subs = []
    this.subs.push(botStorage.onStatus.subscribe((code) => (this.botNotAvailable = code !== BotStorageService.AVAILABLE)))
    this.subs.push(this.ui.docDigest.subscribe((digest) => (this.digest = digest)))
  }

  updateTitle(event) {
    if (event.type === 'keydown' && event.keyCode === 13) {
      this.input.nativeElement.blur()
    } else if (event.type === 'blur') {
      const newTitle = this.input.nativeElement.value
      this.doc.title = newTitle
      if (newTitle !== this.doc.title) {
        this.input.nativeElement.value = this.doc.title
      }
    }
  }

  selectTitle() {
    this.input.nativeElement.select()
  }

  inviteBot() {
    this.network.inviteBot(this.botStorage.wsURL)
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe())
  }

  netfluxLog(event: Event) {
    event.stopPropagation()
  }

  cryptoLog(event: Event) {
    event.stopPropagation()
  }

  docLog(event: Event) {
    event.stopPropagation()
  }

  async downloadMuteLog(event: Event) {
    event.stopPropagation()
    try {
      const lines = (await this.logs.getLogs()).map((e) => JSON.stringify(e) + '\n')
      this.download('mutelog', new Blob(lines))
    } catch (err) {
      log.warn('Unable to download MuteLog: ', err.message)
      this.snackBar.open('Unable to download MuteLog', 'Close')
    }
  }

  async downloadDocLog(event: Event) {
    event.stopPropagation()
    try {
      const blob = (await this.docService.doc.fetchContent(true)) as Blob | undefined
      if (blob) {
        this.download('doclog', blob)
      }
    } catch (err) {
      log.warn('Unable to get LOG: ', err.message)
      this.snackBar.open('Unable to download Document Log', 'Close')
    }
  }

  downloadDocTree(event: Event) {
    event.stopPropagation()
    if (this.ui.docTree) {
      this.download('doctree', new Blob([this.ui.docTree], { type: 'text/json' }))
    } else {
      log.warn('Tree is empty')
      this.snackBar.open(`Tree is empty. Nothing to download`, 'Close')
    }
  }

  private download(name: string, file: Blob) {
    const objectURL = URL.createObjectURL(file)
    const fileName = `${this.doc.signalingKey}_${name.toUpperCase()}_${this.digest}.json`
    this.debugDownload.nativeElement.setAttribute('download', fileName)
    this.debugDownload.nativeElement.setAttribute('href', this.sanitizer.bypassSecurityTrustResourceUrl(objectURL))
    this.debugDownload.nativeElement.click()
  }
}
