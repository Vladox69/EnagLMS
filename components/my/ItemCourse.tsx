import React, { FC } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';



interface Props {
    course: string;
}

export const ItemCourse: FC<Props> = ({ course }) => {

    const router = useRouter();

    const goToModuleById=()=>{
        router.push(`/my/course/module/${course}`);
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
                            {course}
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
