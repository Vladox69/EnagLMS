import React, { FC, useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { GridActivity } from "../activity/";
import { SectionModel, SectionResourceModel } from "@/models";
import { GridSectionResource, ItemSectionResource } from ".";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { enagApi } from "@/apis";
interface Props {
  section: SectionModel;
}

export const ItemSection: FC<Props> = ({ section }) => {
  const [resources, setResources] = useState<SectionResourceModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await enagApi.get<SectionResourceModel[]>(
        `/sections/resources/section_id=${section.id}`
      );
      setResources(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Accordion className="p-0 m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="d-flex align-items-center p-0">
          <ArticleIcon
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Typography component="p" className="fw-bold">
            {" "}
            {section.title}{" "}
          </Typography>
        </div>
      </AccordionSummary>
      <Container>
        <Typography component="p" className="">
          {" "}
          Información de la sección{" "}
        </Typography>
        <Typography
          component="p"
          className=""
          dangerouslySetInnerHTML={{
            __html: section.content,
          }}
        />
        <Typography component="p" fontWeight={700} fontSize={18} > Recursos </Typography>
        {resources.length == 0 ? (
          <Typography component="p" color="textSecondary">
            No existen recursos
          </Typography>
        ) : (
          <>
            {resources.map((resource) => (
              <ItemSectionResource
                key={resource.id}
                section_resource={resource}
              />
            ))}
          </>
        )}

        <Typography component="p" fontWeight={700} fontSize={18} > Actividades </Typography>
        <GridActivity section={section.id} />
      </Container>
    </Accordion>
  );
};
