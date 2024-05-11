export const uploadFile = async (file: File) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dhuqvvw4v/upload';
    const formData = new FormData();

    formData.append('upload_preset', 'files-enag');
    formData.append('file', file);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('No se pudo subir imagen');

        const cloudResp = await resp.json();
        return {
            url:cloudResp.secure_url,
            status:200,
            message:'Archivo enviado',
            title:file.name,
            type:file.type
        };

    } catch (error) {
        return {
            error,
            message:'No se pudo subir la imagen',
            status:400
        }
    }

}