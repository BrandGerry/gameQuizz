import { Container } from "@mui/material";
import React from "react";
import FinishGame from "../components/FinishGame";

const FinishView = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px !important",
        margin: "0px !important",
      }}
    >
      <FinishGame />
    </Container>
  );
};

export default FinishView;
