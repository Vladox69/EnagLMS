import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/ui";
import { LoginForm } from "@/components/auth/LoginForm";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";

export default function Autenticacion() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifiedSession();
  }, []);

  const verifiedSession = async () => {
    try {
      const { data: user } = await enagApi.get(`/auth/profile`);
      switch (user.rol) {
        case "ADMIN":
          router.push("/admin");
          break;
        case "STUDENT":
          router.push("/my");
          break;
        case "TEACHER":
          router.push("/teacher");
          break;
        default:
          break;
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh" // Ajusta esta altura según tus necesidades
        >
          <CircularProgress size={100} color="error" />
        </Box>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
