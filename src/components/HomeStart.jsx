import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const HomeStart = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#371271",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(106, 81, 147)",
          paddingX: "45px",
          paddingY: "15px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #333333",
        }}
      >
        <Typography
          sx={{ fontSize: "25px", color: "white", marginBottom: "12px" }}
        >
          Quizz Game
        </Typography>
        <Button
          onClick={() => navigate("/quizzGame")}
          variant="contained"
          fullWidth
          sx={{
            textAlign: "center",
            backgroundColor: "#333333",
            textTransform: "none",
            transform: "scale(1)",
            transition: "transform 0.3s",
            "&:hover": {
              backgroundColor: "#333333",
              transform: "scale(1.05)",
            },
          }}
        >
          iniciar
        </Button>
      </Box>
    </Container>
  );
};

export default HomeStart;
