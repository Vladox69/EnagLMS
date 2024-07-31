import React, { FC } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import { Container, Typography, IconButton } from "@mui/material";
import { SectionModel } from "@/models";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "@/styles/Custom.module.css";
import Swal from "sweetalert2";
import { deleteSection } from "@/utils/section/deleteSection";

interface Props {
  section: SectionModel;
  onDeleteSection: (section: SectionModel) => void;
}

export const ItemTSection: FC<Props> = ({ section, onDeleteSection }) => {
  const router = useRouter();

  const handleDelete = () => {
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteSection(section);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            onDeleteSection(section);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo eliminar los datos",
          });
        }
      }
    });
  };

  const goToEditSection = (section_id: number) => {
    router.push({
      pathname: `/teacher/module/section/edit`,
      query: { section_id },
    });
  };

  const goToSection = () => {
    router.push(`/teacher/module/section/${section.id}`);
  };

  return (
    <Container
      className={
        styles.hover_effect +
        " container border rounded d-flex justify-content-between"
      }
    >
      <div className="d-flex align-items-center" onClick={goToSection}>
        <ArticleIcon
          sx={{
            width: 50,
            height: 50,
          }}
        />
        <Typography component="p"> {section.title} </Typography>
      </div>
      <div className="d-flex align-items-center">
        <IconButton onClick={() => goToEditSection(section.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete()}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Container>
  );
};
