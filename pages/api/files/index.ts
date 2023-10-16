import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|{message:string,response:any}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            return postFile(res,req);
        default:
            return res.status(400).json({message:'Endpoint no existe'});
    }
}


const postFile=async(res:NextApiResponse<Data>,req:NextApiRequest)=>{
    
    const {file}=req.body;
    
    const cloudUrl='https://api.cloudinary.com/v1_1/dhuqvvw4v/upload';
    const formData=new FormData();

    formData.append('upload_preset','files-enag');
    formData.append('file',file);

    try {
        const response = await fetch(cloudUrl,{
            method:'POST',
            body:formData
        });

        return res.status(200).json({
            message:'Imagen subida',
            response
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'No se pudo subir la imagen'})
    }
}