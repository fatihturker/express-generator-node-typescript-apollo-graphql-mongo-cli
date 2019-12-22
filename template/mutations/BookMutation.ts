import { createBook, deleteBook, updateBook } from "../controllers/BookController"

/**
 * @description holds book mutations
 */

export const BookMutation = {
  createBook: {
    resolve: async (parent, args, context, info) => {
      return await createBook(context.dbConn, args.input);
    },
  },
  updateBook: {
    resolve: async (parent, args, context, info) => {
      return await updateBook(context.dbConn, args.input);
    },
  },
  deleteBook: {
    resolve: async (parent, args, context, info) => {
      return await deleteBook(context.dbConn, args.id);
    },
  },
}