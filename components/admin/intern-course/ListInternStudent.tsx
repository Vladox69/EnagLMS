import { InternInscriptionModel } from "@/models";
import React, { FC, useEffect, useState } from "react";
import { ItemInternStudent } from "./ItemInternStudent";

interface Props {
  inscriptions: InternInscriptionModel[];
  is_start:boolean,
}

export const ListInternStudent: FC<Props> = ({ inscriptions: ins ,is_start}) => {
  const [inscriptions, setInscriptions] = useState<InternInscriptionModel[]>(
    []
  );
  useEffect(() => {
    setInscriptions(ins);
  }, [ins]);
  const onDeleteStudent = (inscription: InternInscriptionModel) => {
    setInscriptions((inscriptions) =>
      inscriptions.filter((ins) => ins.id !== inscription.id)
    );
  };
  return (
    <>
      {inscriptions.map((inscription) => (
        <ItemInternStudent
          is_start={is_start}
          key={inscription.id}
          inscription={inscription}
          onDeleteStudent={onDeleteStudent}
        />
      ))}
    </>
  );
};
