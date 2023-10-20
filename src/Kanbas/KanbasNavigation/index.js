import './styles.css';

import { Link, useLocation } from "react-router-dom";
import NEULogo from '../../Images/NEU_Logo.jpg';
import {FaUserLarge, FaGauge, FaAddressBook, FaCalendarDays,
    FaInbox, FaClock, FaTv, FaArrowRightFromBracket, FaRegCircleQuestion} from "react-icons/fa6";


function KanbasNavigation() {
    const links = [{name: "Account", iconClass: "FaUserLarge"},
        {name: "Dashboard", iconClass: "FaGauge"},
        {name: "Courses", iconClass: "FaAddressBook"},
        {name: "Calendar", iconClass: "FaCalendarDays"},
        {name: "Inbox", iconClass: "FaInbox"},
        {name: "History", iconClass: "FaClock"},
        {name: "Studio", iconClass: "FaTv"},
        {name: "Commons", iconClass: "FaArrowRightFromBracket"},
        {name: "Help", iconClass: "FaRegCircleQuestion"}];
    const { pathname } = useLocation();
    return (
        <div className="wd-navbar-container">
        <ul className="wd-navbar-style">
            <li className="wd-list-group-item wd-logo-list">
                <img className="wd-logo" src={NEULogo} alt="Northeastern Logo"/>
            </li>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.name}`}
                    className={`pt-3 wd-list-group-item ${pathname.includes(link.name) && "active"}`}>
                    <div>
                    {link.iconClass === "FaUserLarge" && <FaUserLarge style={{}}/>}
                        {link.iconClass === "FaGauge" && <FaGauge/>}
                        {link.iconClass === "FaAddressBook" && <FaAddressBook/>}
                        {link.iconClass === "FaCalendarDays" && <FaCalendarDays/>}
                        {link.iconClass === "FaInbox" && <FaInbox/>}
                        {link.iconClass === "FaClock" && <FaClock/>}
                        {link.iconClass === "FaTv" && <FaTv/>}
                        {link.iconClass === "FaArrowRightFromBracket" && <FaArrowRightFromBracket/>}
                        {link.iconClass === "FaRegCircleQuestion" && <FaRegCircleQuestion/>}
                    </div>
                        {link.name}

                </Link>

            ))}
        </ul>
        </div>
    );
}
export default KanbasNavigation;

