import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CardsDetails from "./components/CardsDetails";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CardsDetails />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
