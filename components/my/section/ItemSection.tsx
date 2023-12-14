import React, { FC } from 'react'
import { Accordion, AccordionSummary, Container, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { GridActivity } from '../activity/';
import { SectionModel } from '@/models';
import { GridSectionResource } from '.';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface Props {
  section: SectionModel
}

export const ItemSection: FC<Props> = ({ section }) => {


  return (
    <Accordion className='p-0 m-0'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"

      >
        <div className='d-flex align-items-center p-0'>
          <ArticleIcon sx={{
            width: 50,
            height: 50
          }} />
          <Typography component='p' className='fw-bold'> {section.title} </Typography>
        </div>
      </AccordionSummary>
      <Container>
        <Typography component='p' className=''> Información de la sección  </Typography>
        <Typography component='p' className='' dangerouslySetInnerHTML={{
          __html: section.content
        }} />
        <Typography variant='h6'> Recursos  </Typography>
        <GridSectionResource section={section.id} />
        <Typography variant='h6'> Actividad  </Typography>
        <GridActivity section={section.id} />
      </Container>

    </Accordion>
  )
}
