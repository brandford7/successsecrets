import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import {MongoClient} from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();


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
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  
  adapter: MongoDBAdapter(clientPromise),
  pages: {signIn:'auth/signin'},
});
