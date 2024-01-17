import { AppBar, Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <AppFooter />
    </Box>
  );
}

function AppHeader() {
  return (
    <>
      <AppBar
        position="static"
        component={"header"}
        elevation={0}
        color={"transparent"}
      >
        <Container maxWidth="xl" />
      </AppBar>
    </>
  );
}

function AppFooter() {
  return (
    <>
      <AppBar
        elevation={0}
        component="footer"
        position="static"
        color={"transparent"}
      >
        <Container maxWidth="md" />
      </AppBar>
    </>
  );
}
