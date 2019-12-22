import { BookQuery } from "../queries/BookQuery";
import { BookMutation } from "../mutations/BookMutation";
import { IResolvers } from "apollo-server";

/**
 * @description holds book resolver
 */

export const BookResolver: IResolvers = {
  Query: BookQuery,
  Mutation: BookMutation
}