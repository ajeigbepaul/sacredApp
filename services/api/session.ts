import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { id, name, email, token } = req.body;

    // Save session in a secure cookie
    const sessionData = JSON.stringify({ id, name, email, token });

    res.setHeader(
      "Set-Cookie",
      serialize("user-session", sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })
    );

    return res.status(200).json({ message: "Session saved successfully" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
