import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button } from '@mui/material';
import { uploadFile } from '@/utils';
import { SubmissionModel, SubmissionResourceModel } from '@/models';
import { enagApi } from '@/apis';
import { handleDownload } from '@/utils/file/handleDownload';
import { useRouter } from 'next/router';
import { deleteSubmissionResource } from '@/utils/submission/resource/deleteSubmissionResource';

interface Props {
  submission: SubmissionModel,
  resources: SubmissionResourceModel[]
}


export const Dropzone: FC<Props> = ({ submission, resources: resc }) => {


  const [files, setFiles] = useState<any[]>([])
  const [resources, setResources] = useState(resc)
  const [resourceRemoved, setResourceRemoved] = useState<SubmissionResourceModel[]>([])

  const router = useRouter()

  // Guardada de archivo
  const onSave = async () => {
    const fileUploadPromises = [];

    if (resourceRemoved.length > 0) {
      const deletedResourcesPromises = [];
      for (const sub_res of resourceRemoved) {
        deletedResourcesPromises.push(deleteSubmissionResource(sub_res))
      }
      await Promise.all(deletedResourcesPromises)
    }

    if (files.length > 0) {

      for (const file of files) {
        fileUploadPromises.push(uploadFile(file.file))
      }
      const responses = await Promise.all(fileUploadPromises);

      const resourcePromises = []

      for (const res of responses) {
        if (res.status === 200) {
          const body = {
            url_resource: res.url,
            submission_id: submission.id,
            title: res.title
          }
          resourcePromises.push(enagApi.post(`/submissions/resources`, body))
        }
      }
      const responsesResources = await Promise.all(resourcePromises);

    }

    router.back();

  }

  // Quitar archivos
  const onRemove = (name: string) => {
    setFiles(files => files.filter(file => file.file.name !== name))
  }

  // Prebiew con iconos de los archivos
  const renderFile = (file: any, index: number) => {
    const { name, type } = file.file;
    const icon = type === "image/jpeg" || type === "image/png" ? <ImageIcon /> : <PictureAsPdfIcon />;
    return (
      <li key={index} >
        {icon}
        <span >{name}</span>
        <Button onClick={() => onRemove(name)} >Quitar</Button>
      </li>
    );
  };

  const renderResources = (resource: SubmissionResourceModel) => {
    const icon = resource.title.includes('.docx') || resource.title.includes('.pdf') ? <ImageIcon /> : <PictureAsPdfIcon />;
    return (
      <li key={resource.id} >
        {icon}
        <span onClick={() => handleDownload(resource.url_resource, resource.title)}>{resource.title}</span>
        <Button onClick={() => onRemoveResource(resource)} >Quitar</Button>
      </li>
    )
  }

  const onCancel = () => {
    router.back();
  }

  // useEffect(() => {
  //   console.log(resourceRemoved);
  // }, [resourceRemoved]);

  const onRemoveResource = (resource: SubmissionResourceModel) => {
    setResourceRemoved(resourceRemoved => [resource, ...resourceRemoved])
    setResources(resources => resources.filter(rsc => rsc.id !== resource.id))
  }

  // Métodos de drop de los archivos
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
    <>
      <form className='border border-secondary'>
        <div {...getRootProps()} style={{
          height: 100
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
        <ol>
          {
            resources.map(renderResources)
          }
        </ol>
      </form>
      <Button variant='contained' onClick={onSave} >
        Guardar Cambios
      </Button>
      <Button variant='contained' color='error' onClick={onCancel} >
        Cancelar
      </Button>
    </>
  )
}
