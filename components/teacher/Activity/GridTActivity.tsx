import { ActivityModel } from '@/models';
import { Grid, TextField, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { ItemTActivity } from './ItemTActivity';

interface Props {
  activities: ActivityModel[];
}

export const GridTActivity: FC<Props> = ({ activities: acts }) => {
  const [activities, setActivities] = useState(acts);
  const [searchTerm, setSearchTerm] = useState('');

  const onDeleteActivity = (activity: ActivityModel) => {
    setActivities((activities) =>
      activities.filter((act) => act.id !== activity.id)
    );
  };

  // Filtrar actividades basado en el término de búsqueda
  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Barra de búsqueda más pequeña */}
      <TextField
        label="Buscar actividad"
        variant="outlined"
        size="small"
        sx={{ width: '250px', marginBottom: 2 }} // Ajusta el tamaño del buscador
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Renderizar las actividades filtradas */}
      <Grid container className="gap-2">
        {Array.isArray(filteredActivities) && filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <ItemTActivity
              key={activity.id}
              activity={activity}
              onDeleteActivity={() => onDeleteActivity(activity)}
            />
          ))
        ) : (
          <Typography fontSize={20} fontWeight={700} className="text-secondary">No se encontraron secciones.</Typography>
        )}
      </Grid>
    </>
  );
};
