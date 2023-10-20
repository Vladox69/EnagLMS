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
        <Grid item xs={6} md={3} >
            <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardActionArea onClick={goToModuleById} >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/assets/fondo.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {module.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
