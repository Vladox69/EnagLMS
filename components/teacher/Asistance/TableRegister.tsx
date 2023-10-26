import { StudentModel } from '@/models'
import React, { FC, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';

interface Props {
    students: StudentModel[]
}

export const TableRegister: FC<Props> = ({ students }) => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Estudiantes</TableCell>
                        <TableCell >Tipo de sesión</TableCell>
                        <TableCell >ESTADO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {student.ID_card_url}
                            </TableCell>
                            <TableCell >Sesión regular</TableCell>
                            <TableCell >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="p" control={<Radio />} label="" />
                                    <FormControlLabel value="a" control={<Radio />} label="" />
                                    <FormControlLabel value="f" control={<Radio />} label="" />
                                </RadioGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
