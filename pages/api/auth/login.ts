import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { prisma } from "@/apis";



export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body
    
    try {

        const user = await prisma.user.findFirst({
            where: {
                username: username
            }
        })

        if (user?.password === password) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                username: user?.username,
                rol:user?.rol
            }, 'secret')
            const serealized = serialize('enag_session', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 30,
                path: '/'
            })
            res.setHeader('Set-Cookie', serealized)
            return res.status(200).json('Login route')
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error al obtener usuario' })
    }
}