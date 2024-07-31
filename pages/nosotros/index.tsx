import React, { use, useEffect, useState } from "react";
import { Navbar, Footer } from "@/components/ui";
import { Carousel } from "react-bootstrap";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

import bgImage from "@/assets/fondo.jpg";
import { enagApi } from "@/apis";
import { ResourceModel } from "@/models/resources";

export default function SobreNosotros() {

  const [video, setVideo] = useState<ResourceModel>({
    description:'',
    id:0,
    title:'',
    type:'',
    url_resource:''
  })
  const [resources, setResources] = useState<ResourceModel[]>([])

  useEffect(() => {
    getData()
  }, [])
  const getData=async ()=>{
   const {data:imgs}=await enagApi.get<ResourceModel[]>(`/resources/type=image`)
   const {data:vid}=await enagApi.get<ResourceModel>(`/resources/type=video`)
   setResources(imgs)
   setVideo(vid)
  }
  
  return (
    <>
      <Navbar />
      <Container className="d-flex flex-column justify-content-center align-items-center text-center ">
        <Typography variant="h1" fontSize={25}>
          {" "}
          ENAG{" "}
        </Typography>
        <p
          className="w-75"
          style={{
            textAlign: "justify",
          }}
        >
          ENAG se destaca como una escuela de gastronomía de vanguardia,
          dedicada a nutrir y perfeccionar el talento culinario de sus
          estudiantes. Con un enfoque práctico e innovador, nuestra institución
          ofrece una experiencia educativa completa, combinando técnicas
          tradicionales con las últimas tendencias en el arte culinario. Cada
          curso en ENAG está diseñado para sumergir a los estudiantes en el
          mundo de la gastronomía, garantizando que al graduarse, no solo posean
          un conocimiento profundo y respeto por la cocina, sino también la
          confianza y habilidad para innovar y crear. Únete a ENAG y transforma
          tu pasión por la cocina en una carrera de excelencia.
        </p>

        <Carousel className="w-75">
          {
            resources.map((resource)=>(
              <Carousel.Item key={resource.id}>
              <Image src={resource.url_resource} width={750} height={500} alt={""} />
              <Carousel.Caption>
                <h3 className="text-dark" >{resource.title} </h3>
                <p className="text-dark">  {resource.description} </p>
              </Carousel.Caption>
            </Carousel.Item>
            ))
          }

        </Carousel>

        <Typography variant="h2"  className="mt-4" fontSize={25}> Esta semana en ENAG </Typography>
        <div>
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/PBdwmzAx5IE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <Typography variant="h2" fontSize={25}>
          {" "}
          DONDE NOS ENCONTRAMOS{" "}
        </Typography>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta
          ut cupiditate eligendi iusto optio voluptatibus nostrum tempora eius
          quos officia, totam tempore nesciunt, modi dolore aperiam deserunt
          quam. Nulla!
        </p> */}
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4267208197675!2d-78.62407727240137!3d-1.2601033998409856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38188a19532c3%3A0xdd8e91d84a701f98!2sRinc%C3%B3n%20del%20Pepino!5e0!3m2!1ses!2sec!4v1702336156185!5m2!1ses!2sec"
            width="600"
            height="450"
            loading="lazy"
          />
          <Typography variant="h4" fontSize={20}>
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
