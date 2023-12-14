import React, { FC } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ModuleModel } from '@/models';



interface Props {
    module: ModuleModel;
}

export const ItemCourse: FC<Props> = ({ module }) => {

    const router = useRouter();

    const goToModuleById=()=>{
        router.push(`/my/course/module/${module.id}`);
    }

    return (
        <Grid item xs={6} md={3} sm={4} >
            <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardActionArea onClick={goToModuleById} >
                    <CardMedia
                        component="img"
                        image="/assets/fondo.jpg"
                        alt="green iguana"
                    />
                    <CardContent sx={{backgroundColor:'gray'}}>
                        <Typography gutterBottom variant="h5" color='white' component="div">
                            {module.title}
                        </Typography>
                        <Typography component='p' color='white' dangerouslySetInnerHTML={{
                            __html:module.content
                        }} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
