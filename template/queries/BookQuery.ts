import { getAllBooks, getBook } from "../controllers/BookController";

/**
 * @description holds book queries
 */

export const BookQuery = {
  books: {
    resolve: async (parent, args, context, info) => {
      return await getAllBooks(context.dbConn)
    },
  },
  book: {
    resolve: async(parent, args, context, info) => {
      return await getBook(context.dbConn, args.id)
    },
  }
}