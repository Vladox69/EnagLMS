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
import React, { FC, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
      < >
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
      <Button color="error" variant="contained" className="mt-2">
        Agregar actvidad
      </Button>
    </Container>
  );
};
