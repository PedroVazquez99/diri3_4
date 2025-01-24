import { Link, Outlet } from "react-router-dom";
import NavbarLink from "../components/NavbarLink";

function App() {
  return (
    <>
      <NavbarLink></NavbarLink>
      <nav>
        <Link to="/about/ayuda">Ayuda</Link> | <Link to="/about/telefono">Teléfono</Link>
      </nav>
      <Outlet /> {/* Las rutas anidadas se renderizan aquí */}
    </>
  );
}

export default App;
