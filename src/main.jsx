import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./view/HomeView.jsx";
import StartGameView from "./view/StartGameView";
import FinishView from "./view/FinishView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/quizzGame",
    element: <StartGameView />,
  },
  {
    path: "/finishGame",
    element: <FinishView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
