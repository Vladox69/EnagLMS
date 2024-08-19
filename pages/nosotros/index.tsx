import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components/ui";
import { Carousel } from "react-bootstrap";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";

import { enagApi } from "@/apis";
import { ResourceModel } from "@/models/resources";

export default function SobreNosotros() {
  const [video, setVideo] = useState<ResourceModel>({
    description: '',
    id: 0,
    title: '',
    type: '',
    url_resource: ''
  });
  const [resources, setResources] = useState<ResourceModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: imgs } = await enagApi.get<ResourceModel[]>(`/resources/type=image`);
    const { data: vid } = await enagApi.get<ResourceModel>(`/resources/type=video`);
    setResources(imgs);
    setVideo(vid);
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex flex-column justify-content-center align-items-center text-center" sx={{ mt: 4 }}>
        <Typography variant="h1" fontSize={{ xs: 20, sm: 25 }}>
          ENAG
        </Typography>
        <Typography
          component="p"
          className="w-75"
          sx={{
            textAlign: "justify",
            fontSize: { xs: 14, sm: 16 },
            width: { xs: "100%", sm: "75%" },
            mt: 2,
          }}
        >
          ENAG se destaca como una escuela de gastronomía de vanguardia,
          dedicada a nutrir y perfeccionar el talento culinario de sus
          estudiantes. Con un enfoque práctico e innovador, nuestra institución
          ofrece una experiencia educativa completa, combinando técnicas
          tradicionales con las últimas tendencias en el arte culinario...
        </Typography>

        <Box sx={{ width: { xs: "100%", sm: "75%" }, mt: 4 }}>
          <Carousel>
            {resources.map((resource) => (
              <Carousel.Item key={resource.id}>
                <Image
                  src={resource.url_resource}
                  width={750}
                  height={500}
                  alt={resource.title}
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <Typography variant="h5" className="text-dark">
                    {resource.title}
                  </Typography>
                  <Typography className="text-dark">
                    {resource.description}
                  </Typography>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>

        <Typography variant="h2" fontSize={{ xs: 20, sm: 25 }} className="mt-4">
          Esta semana en ENAG
        </Typography>

        <Box sx={{ width: "100%", mt: 4 }}>
          <Box sx={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PBdwmzAx5IE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </Box>
        </Box>

        <Typography variant="h2" fontSize={{ xs: 20, sm: 25 }} className="mt-4">
          DONDE NOS ENCONTRAMOS
        </Typography>

        <Container className="mt-4" sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", height: "0", paddingBottom: "56.25%", position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4267208197675!2d-78.62407727240137!3d-1.2601033998409856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38188a19532c3%3A0xdd8e91d84a701f98!2sRinc%C3%B3n%20del%20Pepino!5e0!3m2!1ses!2sec!4v1702336156185!5m2!1ses!2sec"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            />
          </Box>
          <Typography variant="h4" fontSize={20} sx={{ mt: 2 }}>
            Av. Cevallos y 12 de Noviembre
          </Typography>
          <Typography variant="h4" fontSize={20}>
            Matriz Ambato
          </Typography>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
