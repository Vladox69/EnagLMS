import { Button, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import bgImage from "@/assets/fondo.jpg";
import React, { useEffect, useState } from "react";
import { enagApi } from "@/apis";
import styles from "@/styles/Custom.module.css";
import { useRouter } from "next/router";
import { ResourceModel } from "@/models/resources";
import Swal from "sweetalert2";
import { deleteResource } from "@/utils/resources/deleteResource";

export default function Resources() {
  const router = useRouter();
  const [resources, setResources] = useState<ResourceModel[]>([]);

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    const { data } = await enagApi.get(`/resources`);
    setResources(data);
  };

  const goToNewResoruce = () => {
    router.push(`/admin/resources/new`);
  };

  const onDelete=(rsc:ResourceModel)=>{
    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de eliminar?',
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res:any = await deleteResource(rsc);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            onRemoveResource(rsc)
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se pudo eliminar los datos',
          })
        }
      }
    })
  }
  const onRemoveResource=(rsc:ResourceModel)=>{
    setResources(resources => resources.filter(r => r.id !== rsc.id))
  }

  return (
    <>
      <Grid container spacing={2}>
        {resources.map((resource) => (
          <Grid item xs={6} md={3} key={resource.id}>
            {resource.type == "image" ? (
              <CardMedia
                component="img"
                alt={`${resource.title}.png`}
                image={resource.url_resource}
                height={250}
                width={250}
              />
            ) : (
              <div>
                <iframe
                  width="250"
                  height="250"
                  src={resource.url_resource}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {resource.title && (
              <Typography component="p" className="fw-bold">
                {" "}
                Titulo: <span className="fw-light">
                  {" "}
                  {resource.title}{" "}
                </span>{" "}
              </Typography>
            )}
            {resource.description && (
              <Typography component="p" className="fw-bold">
                {" "}
                Descripción:{" "}
                <span className="fw-light">{resource.description}</span>{" "}
              </Typography>
            )}
            <Typography component="p" className="fw-bold">
              {" "}
              Tipo: <span className="fw-light">{resource.type}</span>{" "}
            </Typography>
            <Button color="error" variant="contained" onClick={()=>onDelete(resource)} >
              Eliminar
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        color="error"
        variant="contained"
        className={styles.black_button + " mt-2"}
        onClick={goToNewResoruce}
      >
        Agregar recurso
      </Button>
    </>
  );
}
