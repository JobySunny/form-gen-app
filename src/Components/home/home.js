import React from "react";
import Renderer from "/home/fact-11/Desktop/formApp/formapp/src/Components/formRenderer/renderer.js";
import Generator from "/home/fact-11/Desktop/formApp/formapp/src/Components/formGenerator/generator.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="" element={<Generator />} />
        <Route path="/RenderForm" element={<Renderer/>} />
      </Routes>
    </>
  );
}
