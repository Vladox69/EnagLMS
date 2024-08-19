import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const serialized = serialize("enag_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({ message: "Logged out successfully" });
}
