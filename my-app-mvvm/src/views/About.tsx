import { Link, Outlet } from "react-router-dom";
import NavbarLink from "../components/NavbarLink";

function App() {
  return (
    <>
      <NavbarLink></NavbarLink>
      <nav>
        <Link to="/about/preguntas">Preguntas más frecuentes</Link> | <Link to="/about/referencia">Referencia</Link>
      </nav>
      <Outlet /> {/* Las rutas anidadas se renderizan aquí */}
    </>
  );
}

export default App;
