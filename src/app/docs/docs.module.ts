import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared'
import { DocsComponent } from './docs.component'
import { NavModule } from '../nav'

import { ClipboardModule } from 'ngx-clipboard'

@NgModule({
  declarations: [ DocsComponent ],
  imports: [
    CommonModule,
    SharedModule,
    NavModule,
    ClipboardModule,
    RouterModule.forChild([
      {
        path: 'docs',
        redirectTo: '/docs/all',
        pathMatch: 'full'
      }, {
        path: 'docs/:storage',
        component: DocsComponent
      }
    ])
  ],
  providers: []
})
export class DocsModule {

  constructor () {
    log.angular('DocsModule constructed')
  }
}
