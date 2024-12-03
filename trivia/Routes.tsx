import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/home";
import Game from "./src/pages/game";

export const ProjectRoutes = () => {
  return (
    <Suspense fallback={<div>LOADING.....</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
