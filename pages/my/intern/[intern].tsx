import { enagApi } from "@/apis";
import { ItemInternActivity } from "@/components/my/intern/ItemInternActivity";
import { ActivityInternModel, InternCourseModel } from "@/models";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const MyInternCourseById = () => {
  const router = useRouter();
  const [activities, setActivities] = useState<ActivityInternModel[]>([]);
  const [course, setCourse] = useState<InternCourseModel>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredActivities, setFilteredActivities] = useState<
    ActivityInternModel[]
  >([]);

  // Hook para obtener el tema y media query
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { intern: id } = router.query;
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    // Filtrar actividades según la búsqueda
    if (searchQuery) {
      setFilteredActivities(
        activities.filter((activity) =>
          activity.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredActivities(activities);
    }
  }, [searchQuery, activities]);

  const getData = async () => {
    try {
      if (id) {
        const { data: cs } = await enagApi.get<InternCourseModel>(
          `/intern_course/course_id=${id}`
        );
        setCourse(cs);
        const { data: acts } = await enagApi.get<ActivityInternModel[]>(
          `/intern_activity/course_id=${id}`
        );
        setActivities(acts);
      }
    } catch (error) {}
  };

  return (
    <>
      {activities === undefined || course === undefined ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      ) : (
        <Container className="container">
          <Typography component="p" fontWeight={700} fontSize={26}>
            {course.title}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: course.content,
            }}
          />
          <Typography component="p" fontSize={20} fontWeight={700}>
            Actividades semanales
          </Typography>
          {/* Campo de búsqueda */}
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Buscar actividades..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              mb: 2,
              maxWidth: isLargeScreen ? "400px" : "100%", // Cambia el tamaño basado en el tamaño de pantalla
              width: isLargeScreen ? "400px" : "100%",
            }}
          />
          {filteredActivities.length === 0 ? (
            <Typography component="p" color="textSecondary">
              No existen actividades
            </Typography>
          ) : (
            <>
              {filteredActivities.map((activity) => (
                <ItemInternActivity activity={activity} key={activity.id} />
              ))}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default MyInternCourseById;
