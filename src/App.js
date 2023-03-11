import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Widgets from "./pages/Widgets"
import Integrations from "./pages/Integrations"
import Cases from "./pages/Cases"
import Sertificates from "./pages/Sertificates"
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app relative text-sm ss:text-base">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/widgets" element={<Widgets/>} />
        <Route path="/integrations" element={<Integrations/>} />
        <Route path="/cases" element={<Cases/>} />
        <Route path="/sertifications" element={<Sertificates/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
