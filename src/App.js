import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPortfolio from "./Admin/AdminPortfolio";
import PortfolioList from "./pages/PortfolioList";
import PortfolioDetails from "./pages/PortfolioDetails";
import ImageGallery from "./pages/ImageGallery";
import Video from "./pages/Video";
import NavbarStudio from "./components/NavbarStudio";
import Footer from "./components/Footer";
import AdminVideoUpload from "./Admin/AdminVideoUpload";
const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);



  return (
    <div>
      {!isOnline && (
        <div
          style={{ textAlign: "center", padding: "20px", background: "yellow" }}
        >
          <p>Please turn on your internet or connect to WiFi!</p>
        </div>
      )}
      {isOnline && (
        <BrowserRouter>
        {/* <NavbarStudio/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            <Route path="/images" element={<ImageGallery />} />
            <Route path="/video" element={<Video />} />
            {/* Admin */}
            <Route
              path="/admin/portfolio/create"
              element={<AdminPortfolio />}
            />
            <Route
              path="/admin/video/upload"
              element={<AdminVideoUpload />}
            />
          </Routes>
          <Footer/>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
