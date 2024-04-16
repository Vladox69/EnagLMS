import { NextApiRequest, NextApiResponse } from "next";
import { verify } from 'jsonwebtoken'

export default async function profileHandler(req: NextApiRequest, res: NextApiResponse) {
    const { enag_session } = req.cookies
    if(!enag_session){
        return res.status(401).json({error:'Token not found'})
    }
    try {
        const user = verify(enag_session, 'secret')
        // console.log(user);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' })
    }

}