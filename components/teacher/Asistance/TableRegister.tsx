import React, { FC, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, RadioGroup, Radio, FormControlLabel, Grid, Button } from '@mui/material';
import { AsistanceStudentI } from '@/interface';
import { saveAsistanceRegisters } from '@/utils/saveAsistanceRegisters';

interface Props {
    asistance_students: AsistanceStudentI[]
}

export const TableRegister: FC<Props> = ({ asistance_students }) => {
    
    const [asistances, setAsistances] = useState(asistance_students)

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>,id:number)=>{

        const nuevoArray = asistances.map((estudiante) => {
            if (estudiante.id === id) {
              return {
                ...estudiante,
                estado: event.target.value,
              };
            }
            return estudiante;
          });
          setAsistances(nuevoArray)
    }

    const onSaveRegisters=async ()=>{
       const res = await saveAsistanceRegisters(asistances);
       console.log(res);
    }
 
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Estudiantes</TableCell>
                        <TableCell >Tipo de sesión</TableCell>
                        <TableCell >
                            <Grid container>
                                <Grid item xs={2}>
                                    P
                                </Grid>
                                <Grid item xs={2}>
                                    A
                                </Grid>
                                <Grid item xs={2}> 
                                    F
                                </Grid>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {asistances.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {student.student}
                            </TableCell>
                            <TableCell >{student.tipo_sesion}</TableCell>
                            <TableCell >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    className='d-flex'
                                    name="estado"
                                    id='estado'
                                    value={student.estado}
                                    onChange={(event)=> handleChange(event,student.id)}
                                >
                                    <FormControlLabel value="PRESENTE"   className='col-md-2' control={<Radio />} label="" />
                                    <FormControlLabel value="ATRASO"    className='col-md-2' control={<Radio />} label="" />
                                    <FormControlLabel value="FALTA"     className='col-md-2' control={<Radio />} label="" />
                                </RadioGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant='contained' onClick={onSaveRegisters} >
            Guardar asistencias
        </Button>
        </>
    )
}
