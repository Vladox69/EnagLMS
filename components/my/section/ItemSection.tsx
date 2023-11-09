import React, { FC } from 'react'
import { Container, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { GridActivity } from '../activity/';
import { SectionModel } from '@/models';
import { GridSectionResource } from '.';

interface Props {
  section: SectionModel
}

export const ItemSection: FC<Props> = ({ section }) => {

  
  return (
    <>

      <Container className='container bg-danger d-flex align-items-center' component='div'  >
        <ArticleIcon sx={{
          width: 50,
          height: 50
        }} />
        <Typography component='p' className=''> {section.title} </Typography>
      </Container>
      <Container>
        <Typography component='p' className=''> Información de la sección  </Typography>
        <Typography component='p' className=''  dangerouslySetInnerHTML={{
          __html:section.content
        }}/>
      </Container>
      <Typography component='p' className=''> Recursos  </Typography>
      <GridSectionResource section={section.id} />
      <Typography component='p' className=''> Actividad  </Typography>
      <GridActivity section={section.id} />
    </>
  )
}
