import { AsistanceModel } from '@/models'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import React, { FC, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';
import Swal from 'sweetalert2';

interface Props {
    asistances: AsistanceModel[]
}

export const TableAsistance: FC<Props> = (props) => {

    const { asistances: asistance_init } = props;
    const router = useRouter();

    const [asistances, setAsistances] = useState(asistance_init)

    const goToRegisterAsistance = (asistance_id: number, module_id: number) => {
        router.push(`/teacher/module/asistance/register/asistance_id=${asistance_id}&module_id=${module_id}`)
    }

    const onDeleteAsistance = async (asistance_id: number) => {
        const res = await enagApi.delete(`/asistances/asistance_id=${asistance_id}`);
        if (res.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Registro eliminado',
            }).then((res) => {
                setAsistances(asistances.filter((asistance) => asistance.id != asistance_id))
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No se pudo eliminar el registro',
            })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Fecha</TableCell>
                        <TableCell >Descripcion</TableCell>
                        <TableCell >Opciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {asistances.map((asistance) => (
                        <TableRow
                            key={asistance.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {asistance.date.toLocaleString()}
                            </TableCell>
                            <TableCell >{asistance.description}</TableCell>
                            <TableCell align='left'  >
                                <Container className='p-0'>
                                    <IconButton onClick={() => goToRegisterAsistance(asistance.id, asistance.module_id)} >
                                        <PlayArrowIcon />
                                    </IconButton>
                                    <IconButton>
                                        <SettingsIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onDeleteAsistance(asistance.id)} >
                                        <DeleteIcon />
                                    </IconButton>
                                </Container>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
