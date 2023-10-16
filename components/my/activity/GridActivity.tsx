import React from 'react'
import { Container } from '@mui/material';
import { ItemActivity } from '.';

export const GridActivity = () => {
    const activities = ['1', '2', '3'];

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
