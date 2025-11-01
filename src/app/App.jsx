import React, { useEffect } from "react";
import { HeaderTop } from "../components";
import Home from "../pages/home";
import About from "../pages/about";
import ProjectEmailBooking from "../pages/projects/ProjectEmailBooking";
import ProjectChatBot from "../pages/projects/ProjectChatBot";
import ProjectLinkedInPoster from "../pages/projects/ProjectLinkedInPoster";


import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="rs-content">
        <HeaderTop logotext="SEHAL IQBAL" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
          <Route path="/projects/email-booking" element={<ProjectEmailBooking />} />
          <Route path="/projects/chat-bot" element={<ProjectChatBot />} />
          <Route path="/projects/chat-bot" element={<ProjectLinkedInPoster />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
