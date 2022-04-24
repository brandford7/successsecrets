import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import {MongoClient} from "mongodb";


client = new MongoClient(process.env.MONGODB_URI);
clientPromise = client.connect();


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "NEXT_AUTH_SECRET",
 
  adapter: MongoDBAdapter(clientPromise),
  pages: {signIn:'auth/signin'},
});
const