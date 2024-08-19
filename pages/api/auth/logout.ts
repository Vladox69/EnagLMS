import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
    const serialized = serialize('enag_session', '', {
        httpOnly: true,
        secure: true, // Asegura que la cookie se envíe solo sobre HTTPS
        sameSite: 'strict',
        maxAge: -1, // Usar -1 para eliminar la cookie inmediatamente
        path: '/'
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json({ message: 'Logged out successfully' });
}
