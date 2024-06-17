import { InscriptionModel, StudentModel } from '@/models'
import React, { FC, useEffect, useState } from 'react'
import { ItemAStudent } from './ItemAStudent'

interface Props {
    inscriptions:InscriptionModel[],
    is_start:boolean,
}

export const ListAStudent: FC<Props> = ({ inscriptions:ins,is_start}) => {
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
                    is_start={is_start}
                    key={inscription.id} 
                    inscription={inscription}  
                    onDeleteStudent={onDeleteStudent} />
                ))
            }
        </>
    )
}
