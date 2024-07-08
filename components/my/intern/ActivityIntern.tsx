import {
  ActivityInternModel,
  StudentModel,
  SubmissionInternModel,
  UserModel,
} from "@/models";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "@/styles/Custom.module.css";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { updateInternSubmission } from "@/utils/intern-submission/updateInternSubmission";
import { CustomDialog } from "../CustomDialog";
import { handleDownload } from "@/utils/file/handleDownload";
const stylesTable = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 25,
  },
  image: {
    width: 50,
    height: 50,
  },
  titleSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeaderDate: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  tableColHeaderTask: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  tableColDate: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  tableColTask: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 10,
  },
});
const date = new Date();

const formattedDate = new Intl.DateTimeFormat("es-ES").format(date);

const PDFDocument = (data: PDFData) => (
  <Document>
    <Page size="A4" style={stylesTable.page}>
      <View style={stylesTable.section}>
        <View style={stylesTable.titleSection}>
          <Text style={stylesTable.title}>Escuela de gastronomía ENAG</Text>
          <Image style={stylesTable.image} src="/assets/logosf.png" />
        </View>
        <Text>
          Nombre: {data.student.names} {data.student.last_names}{" "}
        </Text>
        <Text>Fecha: {formattedDate}</Text>
        <Text>Tema: {data.title}</Text>
        <View style={stylesTable.table}>
          {/* Fila de encabezado */}
          <View style={stylesTable.tableRow}>
            <View style={stylesTable.tableColHeaderDate}>
              <Text style={stylesTable.tableCellHeader}>Fecha</Text>
            </View>
            <View style={stylesTable.tableColHeaderTask}>
              <Text style={stylesTable.tableCellHeader}>Actividad</Text>
            </View>
          </View>
          {/* Filas de datos */}
          {data.data.map((row) => (
            <>
              <View style={stylesTable.tableRow}>
                <View style={stylesTable.tableColDate}>
                  <Text style={stylesTable.tableCell}>{row.date}</Text>
                </View>
                <View style={stylesTable.tableColTask}>
                  <Text style={stylesTable.tableCell}>{row.task}</Text>
                </View>
              </View>
            </>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

interface Props {
  activity: ActivityInternModel;
}

interface FormTable {
  date: string;
  task: string;
}

interface PDFData {
  data: FormTable[];
  student: StudentModel;
  title:string;
}

export const ActivityIntern: FC<Props> = ({ activity }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState("file");
  const [submission, setSubmission] = useState<SubmissionInternModel>({
    activity_id: 0,
    id: 0,
    student_id: 0,
    url_resource: "",
  });
  const [student, setStudent] = useState<StudentModel>({
    id: 0,
    ID_card_url: "",
    last_names: "",
    names: "",
    study_certificate_url: "",
    user_id: 0,
  });
  const [formTable, setFormTable] = useState<FormTable[]>([
    {
      date: "",
      task: "",
    },
  ]);
  const [fileIntern, setFileIntern] = useState<any>();
  const addRow = () => {
    const newRow: FormTable = {
      date: "",
      task: "",
    };
    setFormTable([...formTable, newRow]);
  };

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get(`/auth/profile`);
      const { data: std } = await enagApi.get<StudentModel>(
        `/students/user_id=${usr.user_id}`
      );
      const { data: sub } = await enagApi.get<SubmissionInternModel>(
        `/intern_submission/student_id=${std.id}&activity_id=${activity.id}`
      );
      setSubmission(sub);
      setStudent(std);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    if (submission.url_resource.includes(".pdf")) {
      setOpen(true);
    } else {
      const titleRes = `${student.last_names}`;
      handleDownload(submission.url_resource, titleRes);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (index: number, key: keyof FormTable, value: string) => {
    const updatedRows = [...formTable];
    updatedRows[index][key] = value;
    setFormTable(updatedRows);
  };

  const deleteRow = (index: number) => {
    const updatedRows = [...formTable];
    updatedRows.splice(index, 1);
    setFormTable(updatedRows);
  };

  const buildPdf = () => {
    generateAndSendPDF();
  };

  const generateAndSendPDF = async () => {
    const file = await generatePDFBlob();
    if (file) {
      setIsLoading(true)
      const body = {
        id: submission.id,
        file,
      };
      const res: any = await updateInternSubmission(body);
      if (res.status == 200) {
        setIsLoading(false)
        Swal.fire({
          icon: "success",
          title: "Datos guardados",
        }).then(() => {
          router.back();
        });
      } else {
        setIsLoading(false)
        Swal.fire({
          icon: "error",
          title: "No se pudo guardar los datos",
        });
      }
    }
  };

  const validateFormTable = () => {
    if (formTable.length == 0) {
      return false;
    }
    if (formTable[0].date == "" && formTable[0].task == "") {
      return false;
    }
    return true;
  };

  const generatePDFBlob = async () => {
    const dataTable: PDFData = {
      data: formTable,
      student,
      title:activity.title
    };
    if (!validateFormTable()) {
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar los datos",
      });
      return undefined;
    } else {
      const asBlob = await pdf(PDFDocument(dataTable)).toBlob();
      const newDate = formattedDate.replaceAll("/", "-");
      const file = new File(
        [asBlob],
        `${student.last_names} ${student.names} ${newDate}.pdf`,
        {
          type: "application/pdf",
          lastModified: new Date().getTime(),
        }
      );
      return file;
    }
  };

  const onClickSave = async () => {
    
    if (option == "file") {
      uploadOptionFile();
    } else {
      buildPdf();
    }
  };

  const uploadOptionFile = async () => {
    if (fileIntern) {
      const body = {
        id: submission.id,
        file: fileIntern,
      };
      setIsLoading(true)
      const res: any = await updateInternSubmission(body);
      if (res.status == 200) {
        setIsLoading(false)
        Swal.fire({
          icon: "success",
          title: "Datos guardados",
        }).then(() => {
          router.back();
        });
      } else {
        setIsLoading(false)
        Swal.fire({
          icon: "error",
          title: "No se pudo guardar los datos",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar los datos",
      });
    }
  };

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    setFileIntern(target.files?.[0]);
  };

  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
          bgcolor="rgba(255, 255, 255, 0.8)"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      )}
      <Container className="container">
        <Typography variant="h4"> {activity.title} </Typography>
        <Typography
          component="p"
          dangerouslySetInnerHTML={{
            __html: activity.content,
          }}
        />
        {submission.url_resource && (
          <div>
            <Typography className="text-danger">
              Archivos entregados{" "}
            </Typography>
            <Container
              className={
                styles.hover_effect +
                " container d-flex align-items-center mb-2 border rounded "
              }
              component="div"
            >
              <ArticleIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography component="p" className="" onClick={handleOpen}>
                {`${student.last_names}.pdf`}{" "}
              </Typography>
              <CustomDialog
                open={open}
                handleClose={handleClose}
                title={`${student.last_names}.pdf`}
                url={submission.url_resource}
              />
            </Container>
          </div>
        )}

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Opción de entrega
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="file"
              control={<Radio />}
              label="Archivo"
              onClick={() => {
                setOption("file");
              }}
            />
            <FormControlLabel
              value="form"
              control={<Radio />}
              label="Formulario"
              onClick={() => {
                setOption("form");
              }}
            />
          </RadioGroup>
        </FormControl>
        <>
          {option == "file" ? (
            <div>
              <TextField
                type="file"
                variant="outlined"
                id="img_file"
                name="img_file"
                className="w-100"
                inputProps={{
                  accept: ".pdf",
                  multiple: false,
                }}
                onChange={onFileInputChange}
              />
            </div>
          ) : (
            <>
              <Grid container spacing={2}>
                {formTable.map((row, index) => (
                  <>
                    <Grid item xs={3}>
                      {/* Input de fecha */}
                      <TextField
                        label="Fecha"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={row.date}
                        onChange={(e) =>
                          handleChange(index, "date", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="task"
                        label="Actividad"
                        variant="outlined"
                        fullWidth
                        value={row.task}
                        onChange={(e) =>
                          handleChange(index, "task", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <IconButton
                        onClick={() => deleteRow(index)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </>
                ))}
              </Grid>
              <IconButton className="my-3" onClick={addRow} color="primary">
                <AddCircleIcon />
              </IconButton>
              <Divider />
            </>
          )}
        </>
        <Button
          onClick={onClickSave}
          color="error"
          variant="contained"
          className="mt-2"
        >
          Agregar actvidad
        </Button>
        {/* <PDFViewer width="100%" height="600">
        <PDFDocument   />
      </PDFViewer> */}
      </Container>
    </>
  );
};
