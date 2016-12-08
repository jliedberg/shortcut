import mongoose, {Schema} from 'mongoose';
import ApiResource from './ApiResource';

const shortcutSchema = mongoose.Schema({
  keys        : { type: Array },
  description : { type: String }
});

const shortcutModel = mongoose.model('Shortcut', shortcutSchema);

export default new ApiResource(shortcutModel);
