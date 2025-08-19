import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> |{" "}
        <Link to="/contact">Contacto</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
