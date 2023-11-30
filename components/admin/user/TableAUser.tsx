import { UserModel } from '@/models'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Props {
    users: UserModel[]
}

export const TableAUser: FC<Props> = ({ users }) => {

    const router = useRouter()

    const goToNewUser = () => {
        router.push(`/admin/users/new`)
    }

    const goToEditUser = (id: number) => {
        router.push({
            pathname: `/admin/users/edit`,
            query: { user_id: id }
        })
    }

    return (
        <>
            <Button variant='contained' onClick={goToNewUser} > Nuevo usuario </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre de usuario</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Rol</TableCell>
                            <TableCell>Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <TableRow
                                key={user.id}
                            >
                                <TableCell >{user.username}</TableCell>
                                <TableCell >{user.email}</TableCell>
                                <TableCell >{user.rol}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" size="medium" onClick={() => goToEditUser(user.id)} >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="medium">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
