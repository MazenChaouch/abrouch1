import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import './index.css';
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import Fourniseur from "./pages/Admin/Fourniseur";
import Produit from "./pages/Admin/Produit";
import SignIn from "./pages/SignIn";
import DemandeAchat from "./pages/Admin/DemandeAchat";
const app = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/apropos" element={<Apropos />} />
        <Route path="admin">
          <Route exact path="fourniseur" element={<Fourniseur />} />
          <Route exact path="produit" element={<Produit />} />
          <Route exact path="demandeachat" element={<DemandeAchat />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default app;
