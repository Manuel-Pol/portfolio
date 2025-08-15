import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Inicio</h1>;
}

function About() {
  return <h1>Acerca de</h1>;
}

function Contact() {
  return <h1>Contacto</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> |{" "}
        <Link to="/contact">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
