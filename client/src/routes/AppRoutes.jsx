import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Builder from "../pages/Builder";
import Templates from "../pages/Templates";
import ATSChecker from "../pages/ATSChecker";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/ats-checker" element={<ATSChecker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;