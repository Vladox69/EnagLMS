import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/layouts/EmailTemplate";
type Data = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return sendEmail(req, res);
  }
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const resend = new Resend("");
    const { data } = req.body;

    const response = await resend.emails.send({
      from: "marwladiagua2001@hotmail.com",
      to: ["vladimiragua52@gmail.com"],
      subject: "Correo de prueba",
      react: EmailTemplate({ data }),
    });

    return res
      .status(200)
      .json({ message: response.data?.id.toString() || "correo enviado" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to create resource. The necessary data is missing or inaccessible.",
    });
  }
};
