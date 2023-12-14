import { Container, Typography} from '@mui/material';
import { SectionResourceModel } from '@/models'
import React, { FC, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { handleDownload } from '@/utils/file/handleDownload';
import { CustomDialog } from '../CustomDialog';
import styles from '@/styles/Custom.module.css'

interface Props {
  section_resource: SectionResourceModel
}

export const ItemSectionResource: FC<Props> = ({ section_resource }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if (section_resource.title.includes('.pdf')) {
      setOpen(true)
    } else {
      handleDownload(section_resource.url_resource, section_resource.title)
    }
  }


  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Container className={styles.hover_effect+' container d-flex align-items-center mb-2 border rounded'} component='div' >
      <ArticleIcon sx={{
        width: 50,
        height: 50
      }} />
      <Typography component='p' className='' onClick={handleOpen} >{section_resource.title} </Typography>
      <CustomDialog open={open}  handleClose={handleClose} title={section_resource.title} url={section_resource.url_resource} />
    </Container>
  )
}
