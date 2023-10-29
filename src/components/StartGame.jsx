import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import questionsData from "../Question";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import FinishGame from "./FinishGame";

const StartGame = () => {
  const navigate = useNavigate();
  const [questionAct, setQuestionAct] = useState(0);
  const [score, setScore] = useState(0);
  const [isFini, setIsFini] = useState(false);

  const [tiempoRestante, setTiempoRestante] = useState(60);
  const [areDisabled, setAreDisabled] = useState(false);

  const handleCorrectAnswer = (isCorrect, e) => {
    console.log(e);

    // Elimina las clases "correct" y "incorrect" antes de agregarlas nuevamente
    e.target.classList.remove("correct", "incorrect");

    if (isCorrect) {
      setScore(score + 1);
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (questionAct === questionsData.length - 1) {
        setIsFini(true);
      } else {
        setQuestionAct(questionAct + 1);
      }
    }, 1500);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFini) {
    return <FinishGame score={score} />;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#79BBFC",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "0px !important",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(106, 81, 147)",
          height: "80px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: 200 }}>
          {questionsData[questionAct]?.pregunta}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#7991FC",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
        }}
      >
        {!areDisabled ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>Tiempo restante:</Typography>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "black",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "white" }}>{tiempoRestante}</Typography>
            </Box>
          </Box>
        ) : (
          <Button
            onClick={() => {
              setTiempoRestante(15);
              setAreDisabled(false);
              setQuestionAct(questionAct + 1);
            }}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "rgb(106, 81, 147)",
              marginBottom: "16px",
              "&:hover": {
                backgroundColor: "rgb(72, 55, 98)",
              },
            }}
          >
            Continuar
          </Button>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button
              onClick={() => navigate("/finishGame")}
              sx={{
                backgroundColor: "rgb(106, 81, 147)",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgb(72, 55, 98)",
                },
              }}
            >
              Salir
            </Button>
            <Button
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: "rgb(106, 81, 147)",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgb(72, 55, 98)",
                },
              }}
            >
              Volver a jugar
            </Button>
          </ButtonGroup>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#79BBFB",
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        {questionsData[questionAct]?.opciones.map((res, index) => (
          <Button
            key={index}
            sx={{ textTransform: "none" }}
            onClick={(e) => {
              handleCorrectAnswer(res.isCorrect, e);
            }}
            disabled={areDisabled}
          >
            <Box
              sx={{
                height: "50px",
                width: "710px",
                backgroundColor: "#d8d3de",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#6A5193", fontSize: "20px" }}>
                {res.textoR}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default StartGame;
