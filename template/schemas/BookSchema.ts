import { gql } from "apollo-server";

/**
 * @description holds book schema
 */

export const BookSchema = gql`
  type Book {
    id: ID!,
    name: String!,
    description: String!
  }

  input CreateBookInput {
    name: String!,
    description: String!
  }

  input UpdateBookInput {
    id: String!,
    name: String!,
    description: String!
  }
  
  extend type Query {
    books: [Book]
    book(id: String!): Book
  }

  extend type Mutation {
    createBook(input: CreateBookInput!): Book
    updateBook(input: UpdateBookInput!): Book
    deleteBook(id: String!): Book
  }
`