import React, { FC, ReactNode, useEffect, useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from "@mui/icons-material/Book";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ClassIcon from "@mui/icons-material/Class";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Person4Icon from "@mui/icons-material/Person4";
import Face6Icon from "@mui/icons-material/Face6";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
  useRouter,
  usePathname,
} from "next/navigation";
import { enagApi } from "@/apis";
import {
  CourseModel,
  InternCourseModel,
  ModuleModel,
  StudentModel,
  TeacherModel,
} from "@/models";
import ShowChartIcon from '@mui/icons-material/ShowChart';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  title?: string;
  children: React.ReactNode;
}

interface Submenu {
  name: string;
  path: string;
  icon?: ReactNode;
  submenu?: Submenu[];
}

interface ItemBar {
  name: string;
  path: string;
  icon: ReactNode;
  onClick: () => void;
  submenu?: Submenu[];
}

interface SubLineMenu {
  name: string;
  path: string;
  submenu?: SubLineMenu[];
}

interface LineMenu {
  name: string;
  path: string;
  onClick: () => void;
  submenu?: SubLineMenu[];
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<Set<number>>(new Set());
  const [openSubSubMenu, setOpenSubSubMenu] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [barItems, setBarItems] = useState<ItemBar[]>([]);
  const [lineMenu, setLineMenu] = useState<LineMenu[]>([]);
  const [homePath, setHomePath] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goHome = () => {
    router.push(`${homePath}`);
  };

  const onLogout = async () => {
    const data= await enagApi.post(`/auth/logout`);
    if(data.status==200){
      router.push("/login")
    }
  };

  const onClickGoTo = (path: string) => {
    if (path !== "") {
      router.push(`/${path}`);
    }
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu((prevOpenSubMenu) => {
      const newOpenSubMenu = new Set(prevOpenSubMenu);
      if (newOpenSubMenu.has(index)) {
        newOpenSubMenu.delete(index);
      } else {
        newOpenSubMenu.add(index);
      }
      return newOpenSubMenu;
    });
  };

  const toggleSubSubMenu = (parentIndex: number, index: number) => {
    setOpenSubSubMenu((prevOpenSubMenu) => {
      const newOpenSubMenu = new Set(prevOpenSubMenu);
      if (newOpenSubMenu.has(index)) {
        newOpenSubMenu.delete(index);
      } else {
        newOpenSubMenu.add(index);
      }
      return newOpenSubMenu;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data: profile } = await enagApi.get(`/auth/profile`);
      buildData(profile);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const goProfile=()=>{
    router.push(`/${homePath}/profile`)
  }

  const buildData = async (profile: any) => {
    const { rol } = profile;
    if (rol == "ADMIN") {
      setHomePath("/admin");
      const items: ItemBar[] = [
        {
          icon: <PersonIcon />,
          path: "admin/users",
          name: "Usuarios",
          onClick: () => onClickGoTo("admin/users"),
        },
        {
          icon: <Person4Icon />,
          name: "Profesores",
          onClick: () => onClickGoTo("admin/teachers"),
          path: "admin/teachers",
        },
        {
          icon: <Face6Icon />,
          name: "Estudiantes",
          onClick: () => onClickGoTo("admin/students"),
          path: "admin/students",
        },
        {
          icon: <ClassIcon />,
          name: "Cursos",
          onClick: () => onClickGoTo("admin/courses"),
          path: "admin/courses",
        },
        {
          icon: <AssignmentIcon />,
          name: "CV",
          onClick: () => onClickGoTo("admin/interns"),
          path: "admin/interns",
        },
        {
          icon: <AssignmentTurnedInIcon />,
          name: "Pasantías",
          onClick: () => onClickGoTo("admin/intern_course"),
          path: "admin/intern_course",
        },
        {
          icon: <AssessmentIcon />,
          name: "Reportes",
          path: "",
          onClick: () => toggleSubMenu(6),
          submenu: [
            {
              name: "Calificaciones",
              path: "admin/reports/courses",
              icon: <ClassIcon />,
            },
            {
              name: "Asistencias",
              path: "admin/reports/assistances",
              icon: <ChecklistRtlIcon />,
            },
            {
              name: "Inscripciones",
              path: "admin/reports/inscriptions",
              icon: <HowToRegIcon />,
            },
            {
              name: "Pasantías",
              path: "admin/reports/interns",
              icon: <ShowChartIcon />,
            },
          ],
        },
      ];
      setBarItems(items);
    } else if (rol == "STUDENT") {
      setHomePath("/my");
      // Añade lógica específica para estudiantes
      const { data: p } = await enagApi.get(`/auth/profile`);
      const { data: s } = await enagApi.get<StudentModel>(
        `/students/user_id=${p.user_id}`
      );
      const { data: crs } = await enagApi.get<CourseModel[]>(
        `/courses/student_id=${s.id}`
      );
      const { data: mdls } = await enagApi.get<ModuleModel[]>(`/modules`);
      let courses: Submenu[] = [];
      crs.map((cr) => {
        const modulesTemp: ModuleModel[] = mdls.filter(
          (md) => md.course_id == cr.id
        );
        const subMenuModulesTemp: Submenu[] = modulesTemp.map((mdt) => ({
          name: mdt.title,
          path: `my/course/module/${mdt.id}`,
          icon: <LibraryBooksIcon />,
        }));
        const menuTemp: Submenu = {
          name: cr.topic,
          path: `my/course/${cr.id}`,
          icon: <SchoolIcon />,
          submenu: subMenuModulesTemp,
        };
        courses = [...courses, menuTemp];
      });

      const { data: intrs } = await enagApi.get<InternCourseModel[]>(
        `/intern_course/student_id=${s.id}`
      );
      let interns: Submenu[] = [];
      if (intrs.length > 0) {
        interns = intrs.map((itr) => ({
          name: itr.title,
          path: `my/intern/${itr.id}`,
          icon: <CastForEducationIcon />,
        }));
      }

      const items: ItemBar[] = [
        {
          icon: <HistoryEduIcon />,
          name: "Cursos",
          path: "",
          onClick: () => toggleSubMenu(6),
          submenu: courses,
        },
        {
          icon: <BookIcon />,
          name: "Pasantías",
          path: "",
          onClick: () => toggleSubMenu(6),
          submenu: interns,
        },
      ];
      setBarItems(items);

      const lineMenu: LineMenu[] = [
        {
          name: "Cursos",
          onClick: () => {},
          path: "",
        },
        {
          name: "Pasantías",
          onClick: () => {},
          path: "",
        },
        {
          name: "Módulos",
          onClick: () => {},
          path: "",
        },
        {
          name: "Actividades",
          onClick: () => {},
          path: "",
        },
        {
          name: "Calificaciones",
          onClick: () => {},
          path: "",
        },
      ];
      setLineMenu(lineMenu);
    } else if (rol == "TEACHER") {
      // Añade lógica específica para profesores
      setHomePath("/teacher");
      const { data: t } = await enagApi.get<TeacherModel>(
        `/teachers/user_id=${profile.user_id}`
      );
      const { data: mdls } = await enagApi.get<ModuleModel[]>(
        `/modules/teacher_id=${t.id}`
      );
      const modules: Submenu[] = mdls.map((md) => ({
        name: md.title,
        path: `teacher/module/${md.id}`,
        icon: <SchoolIcon />,
      }));

      const { data: intrs } = await enagApi.get<InternCourseModel[]>(
        `/intern_course/teacher_id=${t.id}`
      );

      const interns: Submenu[] = intrs.map((itr) => ({
        name: itr.title,
        path: `teacher/intern/${itr.id}`,
        icon: <SchoolIcon />,
      }));
      const items: ItemBar[] = [
        {
          icon: <AssessmentIcon />,
          name: "Reportes",
          onClick: () => toggleSubMenu(6),
          path: "",
          submenu: [
            {
              name: "Calificaciones",
              path: "teacher/reports/grades",
              icon: <ClassIcon />,
            },
            {
              name: "Asistencias",
              path: "teacher/reports/assistances",
              icon: <ChecklistRtlIcon />,
            },
          ],
        },
        {
          icon: <HistoryEduIcon />,
          name: "Módulos",
          path: "",
          onClick: () => toggleSubMenu(6),
          submenu: modules,
        },
        {
          icon: <BookIcon />,
          name: "Pasantías",
          path: "",
          onClick: () => toggleSubMenu(6),
          submenu: interns,
        },
      ];
      setBarItems(items);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "black" }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ENAG
          </Typography>
          <Divider />
          {/* <List className="d-flex" >
            {lineMenu.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={goHome}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={goProfile}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"Perfíl"} />
            </ListItemButton>
          </ListItem>
          {barItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={
                    item.submenu
                      ? () => toggleSubMenu(index)
                      : () => onClickGoTo(item?.path || "")
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                  {item.submenu && (
                    <IconButton>
                      {openSubMenu.has(index) ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  )}
                </ListItemButton>
              </ListItem>
              {item.submenu && (
                <Collapse
                  in={openSubMenu.has(index)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem, subIndex) => (
                      <React.Fragment key={subIndex}>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={
                            subItem.submenu
                              ? () => toggleSubSubMenu(index, subIndex)
                              : () => onClickGoTo(subItem.path || "")
                          }
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText
                            primary={subItem.name}
                            onClick={() => onClickGoTo(subItem.path || "")}
                          />
                          {subItem.submenu && (
                            <IconButton>
                              {openSubSubMenu.has(subIndex) ? (
                                <ChevronLeftIcon />
                              ) : (
                                <ChevronRightIcon />
                              )}
                            </IconButton>
                          )}
                        </ListItemButton>
                        {subItem.submenu && (
                          <Collapse
                            in={openSubSubMenu.has(subIndex)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {subItem.submenu.map(
                                (subSubItem, subSubIndex) => (
                                  <ListItemButton
                                    key={subSubIndex}
                                    sx={{ pl: 6 }}
                                    onClick={() =>
                                      onClickGoTo(subSubItem.path || "")
                                    }
                                  >
                                    <ListItemIcon>
                                      {subSubItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={subSubItem.name} />
                                  </ListItemButton>
                                )
                              )}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Cerrar sesión"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
