import { InternInscriptionModel } from "@/models";
import React, { FC, useEffect, useState } from "react";
import { ItemInternStudent } from "./ItemInternStudent";

interface Props {
  inscriptions: InternInscriptionModel[];
}

export const ListInternStudent: FC<Props> = ({ inscriptions: ins }) => {
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
          key={inscription.id}
          inscription={inscription}
          onDeleteStudent={onDeleteStudent}
        />
      ))}
    </>
  );
};
