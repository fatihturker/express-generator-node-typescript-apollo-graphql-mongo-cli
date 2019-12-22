import mongoose from "mongoose";

/**
 * @description holds book model
 */

 /**
  * Book interface
  */
export interface IBook extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  transform: () => IBook;
}

/**
 * book schema
 */
const schema: mongoose.SchemaDefinition = {
  name: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  description: { type: mongoose.SchemaTypes.String, required: true }
};

// book collection name
const collectionName: string = "book";

const bookSchema: mongoose.Schema = new mongoose.Schema(schema);

/**
 * transforms book object, 
 * changes _id to id
 */
bookSchema.methods.transform = function() {
  var obj = this.toObject();

  var id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
}

/**
 * creates book model
 * @param conn database connection
 * @returns book model
 */
const BookModel = (conn: mongoose.Connection): mongoose.Model<IBook> =>
  conn.model(collectionName, bookSchema);

export default BookModel;