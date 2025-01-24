import { NavLink } from "react-router-dom";

const NavbarLink = (): React.JSX.Element =>
    <nav>
        <NavLink to="/">Alumnos</NavLink> | <NavLink to="/about">Acerca de...</NavLink>
    </nav>
export default NavbarLink;