import { Link, useLocation } from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2">
               <Link to="/Labs/a3"
                  className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
            <Link className="nav-link" to="/Labs/a4">
                A4</Link>
            <Link className={`nav-link ${pathname.includes("hello") ? "active" : ""}`} to="/hello">Hello</Link>
            <Link className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`} to="/Kanbas">Kanbas</Link>
        </nav>
    );
}
export default Nav;

