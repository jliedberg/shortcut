import mongoose from 'mongoose'

const shortcutSchema = mongoose.Schema({
  keyDisplay  : { type: String },
  keyList     : { type: Array },
  description : { type: String }
})

const clusterSchema = mongoose.Schema({
  name    : { type: String },
  shortcuts : [ { type: Schema.Types.ObjectId, ref: 'Shortcut' } ]
})

// create the model for users and expose it to our app
export default mongoose.model('Shortcut', shortcutSchema)
