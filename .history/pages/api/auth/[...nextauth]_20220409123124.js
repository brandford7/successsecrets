import NextAuth from "next-auth";

export default NextAuth({ providers: [import GoogleProvider from "next-auth/providers/google";] });
