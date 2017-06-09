import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var categorySchema = new Schema({
  name:  String,
  imagePath:   String
});
let Category = mongoose.model('Category', categorySchema);
export default Category;