import { ActivityInternModel } from "@/models";
import {
  Button,
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
import React, { ChangeEvent, FC, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
import { uploadFile } from "@/utils";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 100,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    margin: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeaderDate: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  tableColHeaderTask: {
    width: '75%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  tableColDate: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  tableColTask:{
    width: '75%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableCell: {
    fontSize: 10,
  }
});
const date = new Date();

const formattedDate = new Intl.DateTimeFormat("es-ES").format(date);

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>¡Hola, mundo!</Text>
        <Text>Esta es una tabla:</Text>
        <View style={styles.table}>
          {/* Fila de encabezado */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeaderDate}>
              <Text style={styles.tableCellHeader}>Encabezado 1</Text>
            </View>
            <View style={styles.tableColHeaderTask}>
              <Text style={styles.tableCellHeader}>Encabezado 2</Text>
            </View>
          </View>
          {/* Filas de datos */}
          <View style={styles.tableRow}>
            <View style={styles.tableColDate}>
              <Text style={styles.tableCell}>Dato 1.1</Text>
            </View>
            <View style={styles.tableColTask}>
              <Text style={styles.tableCell}>Dato 1.2</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColDate}>
              <Text style={styles.tableCell}>Dato 2.1</Text>
            </View>
            <View style={styles.tableColTask}>
              <Text style={styles.tableCell}>Dato 2.2</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text> {formattedDate} </Text>
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

export const ActivityIntern: FC<Props> = ({ activity }) => {
  const [option, setOption] = useState("file");
  const [formTable, setFormTable] = useState<FormTable[]>([
    {
      date: "",
      task: "",
    },
  ]);
  const addRow = () => {
    const newRow: FormTable = {
      date: "",
      task: "",
    };
    setFormTable([...formTable, newRow]);
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
    const data = await uploadFile(file);
    console.log(data);
  };

  const generatePDFBlob = async () => {
    const asBlob = await pdf(PDFDocument()).toBlob();
    const file = new File([asBlob], "generated.pdf", {
      type: "application/pdf",
      lastModified: new Date().getTime(),
    });
    return file;
  };

  const onClickSave = () => {
    buildPdf();
  };

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    console.log(target.files?.[0]);
  };

  return (
    <Container className="container">
      <Typography variant="h4"> {activity.title} </Typography>
      <Typography
        component="p"
        dangerouslySetInnerHTML={{
          __html: activity.content,
        }}
      />
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
                    <IconButton onClick={() => deleteRow(index)} color="error">
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
        <PDFDocument />
      </PDFViewer> */}
    </Container>
  );
};
