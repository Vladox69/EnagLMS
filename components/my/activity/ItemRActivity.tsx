import { ActivityResourceModel } from '@/models';
import React, { FC, useState } from 'react'
import { CustomDialog } from '../CustomDialog';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

interface Props{
    resource:ActivityResourceModel;
}

const ResourceDialog = ({ resource }: { resource: ActivityResourceModel }) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <>
            <p onClick={handleOpen}>
                <PictureAsPdfIcon />
                <span>{`${resource.title}.pdf`}</span>
            </p>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title={`${resource.title}.pdf`}
                url={resource.url_resource}
            />
        </>
    );
  };

export const ItemRActivity:FC<Props> = ({resource}) => {
  return (
    <ResourceDialog resource={resource} />
  )
}
