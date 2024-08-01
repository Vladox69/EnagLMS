import { SectionModel } from "@/models";
import React, { FC, useState } from "react";
import { Grid } from "@mui/material";
import { ItemTSection } from "./ItemTSection";

interface Props {
  sections: SectionModel[];
}

export const GridTSection: FC<Props> = ({ sections: sects }) => {
  const [sections, setSections] = useState(sects);

  const onDeleteSection = (section: SectionModel) => {
    setSections((sections) => sections.filter((sec) => sec.id !== section.id));
  };

  return (
    <Grid container className="gap-2">
    {Array.isArray(sections) && sections.map((section) => (
      <ItemTSection
        key={section.id}
        section={section}
        onDeleteSection={() => onDeleteSection(section)}
      />
    ))}
    </Grid>
  );
};
