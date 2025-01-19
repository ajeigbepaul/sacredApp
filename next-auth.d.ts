import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the `id` property
      name?: string | null;
      email?: string | null;
      image?: string | null;
      full_name?:string | null;
    };
  }

  interface JWT {
    id: string; // Add `id` to the JWT payload
  }
}
