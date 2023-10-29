import React from "react";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import StartGame from "../components/StartGame";

const StartGameView = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px !important",
        margin: "0px !important",
      }}
    >
      <StartGame />
    </Container>
  );
};

export default StartGameView;
