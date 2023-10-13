import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button } from '@mui/material';


export const Dropzone = () => {

    const [files, setFiles] = useState<any[]>([])

    const onRemove=(name: string)=>{
        setFiles(files => files.filter(file => file.file.name !== name))
    }

    const renderFile = (file: any,index:number) => {
        const {name,type}=file.file;
        const icon = type === "image/jpeg" || type === "image/png" ? <ImageIcon/> : <PictureAsPdfIcon/>;
        return (
          <li key={index} >
            {icon}
            <span>{name}</span>
            <Button onClick={()=>onRemove(name)} >Quitar</Button>
          </li>
        );
      };
      

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles?.length) {
          setFiles((previousFiles: File[]) => [
            ...previousFiles,
            ...acceptedFiles.map((file: File) => ({
              file,
              preview: URL.createObjectURL(file),
            })),
          ]);
        }
      }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <form>
            <div {...getRootProps()} style={{
                height:100
            }}>
                <input {...getInputProps()} />
                {
                    isDragActive
                        ? (<p>Arraste aquí los archivos</p>)
                        : (<p>Arrastre y suelte algunos archivos aquí, o click para seleccionar archivos</p>)
                }
            </div>
            <ul className=''>
                {files.map(renderFile)}
            </ul>
        </form>
    )
}
