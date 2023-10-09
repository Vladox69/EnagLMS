import React from 'react'
import { Container } from '@mui/material';
import { ItemActivity } from '.';

export const GridActivity = () => {
    const activities = ['ac111', 'ac222', 'ac333'];

    return (
        <>
            <Container>
                {activities.map((ac) => (
                    <ItemActivity key={ac} activity={ac} />
                ))}
            </Container>
        </>
    )
}
