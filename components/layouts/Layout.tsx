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
import { useRouter } from "next/router";
import { enagApi } from "@/apis";

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
  icon: ReactNode;
}

interface ItemBar {
  name: string;
  icon: ReactNode;
  onClick: () => void;
  submenu?: Submenu[];
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<Set<number>>(new Set());
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [barItems, setBarItems] = useState<ItemBar[]>([]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goHome = () => {
    const home = router.pathname.split("/")[1];
    router.push(`/${home}`);
  };

  const onLogout = async () => {
    await enagApi.get(`/auth/logout`);
    router.push("/");
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

  useEffect(() => {
    getData();
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data: profile } = await enagApi.get(`/auth/profile`);
      buildData(profile.rol);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const buildData = (tipo: string) => {
    if (tipo == "ADMIN") {
      const items: ItemBar[] = [
        {
          icon: <PersonIcon />,
          name: "Usuarios",
          onClick: () => onClickGoTo("admin/users"),
        },
        {
          icon: <Person4Icon />,
          name: "Profesores",
          onClick: () => onClickGoTo("admin/teachers"),
        },
        {
          icon: <Face6Icon />,
          name: "Estudiantes",
          onClick: () => onClickGoTo("admin/students"),
        },
        {
          icon: <ClassIcon />,
          name: "Cursos",
          onClick: () => onClickGoTo("admin/courses"),
        },
        {
          icon: <AssignmentIcon />,
          name: "CV",
          onClick: () => onClickGoTo("admin/interns"),
        },
        {
          icon: <AssignmentTurnedInIcon />,
          name: "Pasantías",
          onClick: () => onClickGoTo("admin/intern_course"),
        },
        {
          icon: <AssessmentIcon />,
          name: "Reportes",
          onClick: () => toggleSubMenu(6),
          submenu: [
            {
              name: "Cursos",
              path: "admin/reports/courses",
              icon:<ClassIcon />
            },
            // Agrega más submenús aquí si es necesario
          ],
        },
      ];
      setBarItems(items);
    } else if (tipo == "STUDENT") {
      // Añade lógica específica para estudiantes
    } else if (tipo == "TEACHER") {
      // Añade lógica específica para profesores
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "black" }}>
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
          {barItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton onClick={item.submenu ? () => toggleSubMenu(index) : item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                  {item.submenu && (
                    <IconButton>
                      {openSubMenu.has(index) ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  )}
                </ListItemButton>
              </ListItem>
              {item.submenu && (
                <Collapse in={openSubMenu.has(index)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subIndex}
                        sx={{ pl: 4 }}
                        onClick={() => onClickGoTo(subItem.path)}
                      >
                        <ListItemIcon>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
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
