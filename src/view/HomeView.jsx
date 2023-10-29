import { Container } from "@mui/material";
import React from "react";
import HomeStart from "../components/HomeStart";

const HomeView = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px !important",
        margin: "0px !important",
      }}
    >
      <HomeStart />
    </Container>
  );
};

export default HomeView;
