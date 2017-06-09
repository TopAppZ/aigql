import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var postSchema = new Schema({
  title:  String,
  body:   String,
  description:String,
  imagePath:String,
  category_id:{type:Schema.Types.ObjectId,ref: 'Category'},
  date: { type: Date, default: Date.now }
});
let Post = mongoose.model('Post', postSchema);
export default Post;