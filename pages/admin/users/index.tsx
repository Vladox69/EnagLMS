import { enagApi } from "@/apis";
import { UserModel } from "@/models";
import React, { useState, useEffect } from "react";
import { TableAUser } from "../../../components/admin/user/TableAUser";

export default function Users() {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await enagApi.get<UserModel[]>(`/users`);
      setUsers(data);
    } catch (error) {}
  };

  return (
    <>
      <TableAUser users={users} />
    </>
  );
}
