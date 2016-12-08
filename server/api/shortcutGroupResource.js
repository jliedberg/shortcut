import mongoose, {Schema} from 'mongoose';
import ApiResource from './ApiResource';

const shortcutGroupSchema = mongoose.Schema({
  name    : { type: String },
  shortcuts : [ { type: Schema.Types.ObjectId, ref: 'Shortcut' } ]
});

const shortcutGroupModel = mongoose.model('ShortcutGroup', shortcutGroupSchema);

export default new ApiResource(shortcutGroupModel);
