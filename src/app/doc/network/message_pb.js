/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Doc', null, global);
goog.exportSymbol('proto.Door', null, global);
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.Newmessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Message.oneofGroups_);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Message.displayName = 'proto.Message';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Message.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.Message.TypeCase = {
  TYPE_NOT_SET: 0,
  DOOR: 1,
  DOC: 2,
  MSG: 3
};

/**
 * @return {proto.Message.TypeCase}
 */
proto.Message.prototype.getTypeCase = function() {
  return /** @type {proto.Message.TypeCase} */(jspb.Message.computeOneofCase(this, proto.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Message} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    door: (f = msg.getDoor()) && proto.Door.toObject(includeInstance, f),
    doc: (f = msg.getDoc()) && proto.Doc.toObject(includeInstance, f),
    msg: (f = msg.getMsg()) && proto.Newmessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Message;
  return proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Door;
      reader.readMessage(value,proto.Door.deserializeBinaryFromReader);
      msg.setDoor(value);
      break;
    case 2:
      var value = new proto.Doc;
      reader.readMessage(value,proto.Doc.deserializeBinaryFromReader);
      msg.setDoc(value);
      break;
    case 3:
      var value = new proto.Newmessage;
      reader.readMessage(value,proto.Newmessage.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDoor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Door.serializeBinaryToWriter
    );
  }
  f = message.getDoc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Doc.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Newmessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Door door = 1;
 * @return {?proto.Door}
 */
proto.Message.prototype.getDoor = function() {
  return /** @type{?proto.Door} */ (
    jspb.Message.getWrapperField(this, proto.Door, 1));
};


/** @param {?proto.Door|undefined} value */
proto.Message.prototype.setDoor = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearDoor = function() {
  this.setDoor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasDoor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Doc doc = 2;
 * @return {?proto.Doc}
 */
proto.Message.prototype.getDoc = function() {
  return /** @type{?proto.Doc} */ (
    jspb.Message.getWrapperField(this, proto.Doc, 2));
};


/** @param {?proto.Doc|undefined} value */
proto.Message.prototype.setDoc = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearDoc = function() {
  this.setDoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasDoc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Newmessage msg = 3;
 * @return {?proto.Newmessage}
 */
proto.Message.prototype.getMsg = function() {
  return /** @type{?proto.Newmessage} */ (
    jspb.Message.getWrapperField(this, proto.Newmessage, 3));
};


/** @param {?proto.Newmessage|undefined} value */
proto.Message.prototype.setMsg = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearMsg = function() {
  this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Newmessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Newmessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Newmessage.displayName = 'proto.Newmessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Newmessage.prototype.toObject = function(opt_includeInstance) {
  return proto.Newmessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Newmessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Newmessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Newmessage}
 */
proto.Newmessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Newmessage;
  return proto.Newmessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Newmessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Newmessage}
 */
proto.Newmessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Newmessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Newmessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Newmessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Newmessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.Newmessage.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Newmessage.prototype.setService = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Newmessage.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.Newmessage.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.Newmessage.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.Newmessage.prototype.setContent = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Door = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Door, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Door.displayName = 'proto.Door';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Door.prototype.toObject = function(opt_includeInstance) {
  return proto.Door.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Door} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Door.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    opened: jspb.Message.getFieldWithDefault(msg, 2, false),
    intentionally: jspb.Message.getFieldWithDefault(msg, 3, false),
    mustclose: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Door}
 */
proto.Door.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Door;
  return proto.Door.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Door} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Door}
 */
proto.Door.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpened(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntentionally(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMustclose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Door.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Door.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Door} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Door.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpened();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIntentionally();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMustclose();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.Door.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Door.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool opened = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Door.prototype.getOpened = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.Door.prototype.setOpened = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool intentionally = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Door.prototype.getIntentionally = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.Door.prototype.setIntentionally = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool mustClose = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Door.prototype.getMustclose = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.Door.prototype.setMustclose = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Doc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Doc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Doc.displayName = 'proto.Doc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Doc.prototype.toObject = function(opt_includeInstance) {
  return proto.Doc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Doc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Doc.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Doc}
 */
proto.Doc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Doc;
  return proto.Doc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Doc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Doc}
 */
proto.Doc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Doc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Doc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Doc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Doc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.Doc.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Doc.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto);
