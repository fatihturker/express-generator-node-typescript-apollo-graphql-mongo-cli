import BookModel, { IBook } from "../models/BookModel"
import { ApolloError } from "apollo-server";

/**
 * 
 * @description holds crud operations for the book entity 
 */

/**
 * gets all books
 * @param connection database connection
 * @returns {IBook[]} book list
 */
export const getAllBooks = async (connection) => { 
  let list: IBook[];

  try {
    list = await BookModel(connection).find();
    if (list != null && list.length > 0) {
      list = list.map(u => {
        return u.transform()
      }); 
    }
  } catch(error) {
    console.error("> getAllBooks error: ", error);
    throw new ApolloError("Error retrieving all books");
  }

  return list;
}

/**
 * gets book by id
 * @param connection database connection
 * @param id book id
 * @returns {IBook | null} book or null
 */
export const getBook = async (connection, id: string) => {
  let book: IBook | null;

  try {
    book = await BookModel(connection).findById(id);
    if (book != null) {
      book = book.transform();
    }
  } catch(error) {
    console.error("> getBook error: ", error);
    throw new ApolloError("Error retrieving book with id: " + id);
  }

  return book;
}

/**
 * creates book
 * @param connection database connection
 * @param args book
 * @returns {IBook} created book
 */
export const createBook = async (connection, args: IBook) => {
  let createdBook: IBook;
  
  try {
    createdBook = (await BookModel(connection).create(args)).transform();
  } catch(error) {
    console.error("> createBook error: ", error);
    throw new ApolloError("Error saving book with name: " + args.name);
  }

  return createdBook;
}

/**
 * deletes book
 * @param connection database connection
 * @param id book id
 * @returns {IBook | null} deleted book or null
 */
export const deleteBook = async (connection, id: string) => {
  let deletedBook: IBook | null;
  
  try {
    deletedBook = await BookModel(connection).findByIdAndRemove(id);
    if (deletedBook != null) {
      deletedBook = deletedBook.transform();
    }
  } catch(error) {
    console.error("> deleteBook error: ", error);
    throw new ApolloError("Error deleting book with id: " + id);
  }

  return deletedBook;
}

/**
 * updates book
 * @param connection database connection
 * @param args book
 * @returns {IBook | null} updated book or null
 */
export const updateBook = async (context, args: IBook) => {
  let updatedBook: IBook | null;
  
  try {
    updatedBook = await BookModel(context).findByIdAndUpdate(args.id, 
      {
        name: args.name, 
        description: args.description
      }, {new: true});
      
    if (updatedBook != null) {
      updatedBook = updatedBook.transform();
    }
  } catch(error) {
    console.error("> updateBook error: ", error);
    throw new ApolloError("Error updating book with id: " + args.id);
  }

  return updatedBook;
}