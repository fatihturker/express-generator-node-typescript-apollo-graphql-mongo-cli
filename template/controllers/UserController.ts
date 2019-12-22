import UserModel, { IUser } from "../models/UserModel"
import { ApolloError } from "apollo-server";

/**
 * 
 * @description holds crud operations for the user entity 
 */

/**
 * gets all users
 * @param connection database connection
 * @returns {IUser[]} user list
 */
export const getAllUsers = async (connection) => { 
  let list: IUser[];

  try {
    list = await UserModel(connection).find();
    if (list != null && list.length > 0) {
      list = list.map(u => {
        return u.transform()
      }); 
    }
  } catch(error) {
    console.error("> getAllUsers error: ", error);
    throw new ApolloError("Error retrieving all users");
  }

  return list;
}

/**
 * gets user by id
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} user or null
 */
export const getUser = async (connection, id: string) => {
  let user: IUser | null;

  try {
    user = await UserModel(connection).findById(id);
    if (user != null) {
      user = user.transform();
    }
  } catch(error) {
    console.error("> getUser error: ", error);
    throw new ApolloError("Error retrieving user with id: " + id);
  }

  return user;
}

/**
 * creates user
 * @param connection database connection
 * @param args user
 * @returns {IUser} created user
 */
export const createUser = async (connection, args: IUser) => {
  let createdUser: IUser;
  
  try {
    createdUser = (await UserModel(connection).create(args)).transform();
  } catch(error) {
    console.error("> createUser error: ", error);
    throw new ApolloError("Error saving user with name: " + args.name);
  }

  return createdUser;
}

/**
 * deletes user
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} deleted user or null
 */
export const deleteUser = async (connection, id: string) => {
  let deletedUser: IUser | null;
  
  try {
    deletedUser = await UserModel(connection).findByIdAndRemove(id);
    if (deletedUser != null) {
      deletedUser = deletedUser.transform();
    }
  } catch(error) {
    console.error("> deleteUser error: ", error);
    throw new ApolloError("Error deleting user with id: " + id);
  }

  return deletedUser;
}

/**
 * updates user
 * @param connection database connection
 * @param args user
 * @returns {IUser | null} updated user or null
 */
export const updateUser = async (context, args: IUser) => {
  let updatedUser: IUser | null;
  
  try {
    updatedUser = await UserModel(context).findByIdAndUpdate(args.id, 
      {
        name: args.name, 
        email: args.email
      }, {new: true});
      
    if (updatedUser != null) {
      updatedUser = updatedUser.transform();
    }
  } catch(error) {
    console.error("> updateUser error: ", error);
    throw new ApolloError("Error updating user with id: " + args.id);
  }

  return updatedUser;
}