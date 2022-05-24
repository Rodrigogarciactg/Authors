import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
import Update from "./components/Update";
import AuthorList from "./components/AuthorList";
import AuthorForm from "./components/AuthorForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Update />} path="/Authors/edit/:id" />
          <Route element={<AuthorForm />} path="/Authors/new/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
