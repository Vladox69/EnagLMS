import { InscriptionModel, StudentModel } from '@/models'
import React, { FC, useEffect, useState } from 'react'
import { ItemAStudent } from './ItemAStudent'

interface Props {
    inscriptions:InscriptionModel[]
}

export const ListAStudent: FC<Props> = ({ inscriptions:ins }) => {
    const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([])
    useEffect(() => {
        setInscriptions(ins)
    }, [ins])

    

    const onDeleteStudent = (inscription:InscriptionModel) => {
        setInscriptions(inscriptions => inscriptions.filter(ins => ins.id !== inscription.id))
    }

    return (
        <>
            {
                inscriptions.map((inscription) => (
                    <ItemAStudent 
                    key={inscription.id} 
                    inscription={inscription}  
                    onDeleteStudent={onDeleteStudent} />
                ))
            }
        </>
    )
}
