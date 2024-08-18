import { SectionModel } from "@/models";
import React, { FC, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { ItemTSection } from "./ItemTSection";

interface Props {
  sections: SectionModel[];
}

export const GridTSection: FC<Props> = ({ sections: sects }) => {
  const [sections, setSections] = useState(sects);
  const [searchTerm, setSearchTerm] = useState("");

  const onDeleteSection = (section: SectionModel) => {
    setSections((sections) => sections.filter((sec) => sec.id !== section.id));
  };

  // Filtrar las secciones basado en el término de búsqueda
  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Barra de búsqueda más pequeña */}
      <TextField
        label="Buscar sección"
        variant="outlined"
        size="small"
        sx={{ width: "250px", marginBottom: 2 }} // Ajusta el tamaño del buscador
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Renderizar las secciones filtradas */}
      <Grid container className="gap-2">
        {Array.isArray(filteredSections) && filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <ItemTSection
              key={section.id}
              section={section}
              onDeleteSection={() => onDeleteSection(section)}
            />
          ))
        ) : (
          <Typography fontSize={20} fontWeight={700} className="text-secondary">No se encontraron secciones.</Typography>
        )}
      </Grid>
    </>
  );
};
