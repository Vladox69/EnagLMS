import React, { FC, useEffect, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, RadioGroup, Radio, FormControlLabel, Grid, Button, Typography } from '@mui/material';
import { AsistanceStudentI } from '@/interface';
import { saveAsistanceRegisters } from '@/utils/asistance/saveAsistanceRegisters';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import styles from '@/styles/Custom.module.css'
import { AsistanceModel } from '@/models';

interface Props {
    asistance_students: AsistanceStudentI[],
    asistance: AsistanceModel
}

export const TableRegister: FC<Props> = ({ asistance_students: as, asistance }) => {

    const router = useRouter()

    useEffect(() => {
        setAsistances(as)
    }, [as])

    const [asistances, setAsistances] = useState<AsistanceStudentI[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {

        const nuevoArray = asistances.map((reg: AsistanceStudentI) => {
            if (reg.id === id) {
                return {
                    id: reg.id,
                    student: reg.student,
                    asistance: {
                        ...reg.asistance,
                        status: event.target.value
                    }
                };
            }
            return reg;
        });
        setAsistances(nuevoArray)
        console.log(nuevoArray);
    }

    const onSaveRegisters = async () => {
        const res: any = await saveAsistanceRegisters(asistances);
        if (res.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Los datos de guardaron',
            }).then(() => {
                router.back()
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No se pudo guardar los datos',
            }).then(() => {
                router.back()
            })
        }
    }

    const goBack = () => {
        router.back()
    }

    return (
        <>
            <Typography variant='h4' className='mb-2'> Tabla de registro de asistencias </Typography>
            <TableContainer component={Paper} className='border rounded'>
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
                        {asistances.map((regis) => (
                            <TableRow
                                key={regis.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {regis.student.names} {regis.student.last_names}
                                </TableCell>
                                <TableCell >{asistance.description}</TableCell>
                                <TableCell >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        className='d-flex'
                                        name="estado"
                                        id='estado'
                                        value={regis.asistance.status}
                                        onChange={(event) => handleChange(event, regis.id)}
                                    >
                                        <FormControlLabel value="PRESENTE" className='col-md-2' control={<Radio color='error' />} label="" />
                                        <FormControlLabel value="ATRASO" className='col-md-2' control={<Radio color='error' />} label="" />
                                        <FormControlLabel value="FALTA" className='col-md-2' control={<Radio color='error' />} label="" />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant='contained' color='error' onClick={onSaveRegisters} className='mt-2 me-2'  >
                Guardar
            </Button>
            <Button variant='contained' className={styles.black_button + ' mt-2'} onClick={goBack}>
                Cancelar
            </Button>
        </>
    )
}
