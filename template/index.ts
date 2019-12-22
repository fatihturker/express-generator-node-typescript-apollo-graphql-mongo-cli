/**
 * @description holds server main
 */

// configuring environment variables
import dotenv from "dotenv"
dotenv.config();

// creating apollo server
import apolloServer from "./graphql";

const port: string = process.env.PORT as string;

// start listening
apolloServer.listen(port).then(({ url }) => {
  console.log(`Apollo Server is running on ${url} `);
});
