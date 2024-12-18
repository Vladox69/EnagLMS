import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { verify } from 'jsonwebtoken'
export default async function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { enag_session } = req.cookies;

  if (!enag_session) {
    return res.status(401).json({ error: "Token not found" });
  }
  try {
    verify(enag_session, "secret");
    const serealized = serialize("enag_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });
    res.setHeader("Set-Cookie", serealized);
    return res.status(200).json("logout sucess");
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
