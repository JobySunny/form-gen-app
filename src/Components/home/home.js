import React from "react";
import Renderer from '../FormRenderer/renderer'; 
import Generator from '../FormGenerator/generator'; 
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
