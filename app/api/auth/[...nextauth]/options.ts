import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { login } from "@/services/api/auth";
import GoogleProvider from "next-auth/providers/google";
/**
 * Configuration options for NextAuth.js authentication.
 */
export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true, //see info: https://next-auth.js.org/configuration/providers/oauth#allowdangerousemailaccountlinking-option
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          // Call the login function to authenticate the user
          const userRes = await login({ email, password });
          if (userRes) {
            console.log(userRes.data.user, "userRes");
            // Construct the user object to be returned
            const user = {
              ...userRes?.data?.user,
              id: userRes?.data?.user?._id,
              access_token: userRes?.data?.token,
              // expiresAt: Date.now() + 30 * 60 * 1000,
              // JUST 30 MINS BEFORE
            };
            return user;
          }
        } catch (error: any) {
          const user = error?.data;
          return user;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: { user: any }) {
      // Return the user object on sign-in
      return user;
    },

    async jwt({ token, user, account, trigger, session }) {
      //update token object for credentials authenticated users
      if (user && account?.type === "credentials") {
        token.id = user.id || account.id_token;
        token.user = { ...user };
        if ("access_token" in user) {
          token.access_token = user.access_token;
        } else {
          token.access_token = account.access_token;
        }
      }

      if (trigger === "update" && session?.user) {
        token.user = { ...session.user };
        return token;
      }
      return token;
    },

    async session({
      session,
      token,
      trigger,
    }: {
      session: any;
      token: any;
      trigger: string;
    }) {
      // Check if the token has expired
      if (token.expires_at && Date.now() > token.expires_at) {
        // Invalidate the session if the token has expired
        throw new Error("Session expired");
      }
      // Update the session object with token information
      if (token || trigger === "update") {
        // session.id = token.id;
        session.access_token = token.access_token; //use this if you want token to be Available on the client
        session.user = { ...token.user };
      }
      return session;
    },
  },

  pages: {
    signIn: "/account", // Custom sign-in page
    signOut: "/", // Custom sign-out page
    error: "/error", // Custom error page
  },

  secret: process.env.NEXTAUTH_SECRET, // Secret for NextAuth.js
};
