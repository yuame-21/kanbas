import Signin from "../users/signin";
import {Routes, Route, Navigate, Link, useLocation} from "react-router-dom";
// import Nav from "../Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Project() {
    const { pathname } = useLocation();

    return (
        <div className="row">
            <div className="col-2">
                <nav className="list-group">
                    <Link to="/project/home"
                        className={`list-group-item list-group-item-action ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
                    <Link to="/project/signin"
                        className={`list-group-item list-group-item-action ${pathname.includes("signin") ? "active" : ""}`}>Sign In</Link>
                    <Link to="/project/signup"
                          className={`list-group-item list-group-item-action ${pathname.includes("signup") ? "active" : ""}`}>Sign Up</Link>
                    <Link to="/project/account"
                        className={`list-group-item list-group-item-action ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
                    <Link to="/project/search"
                          className={`list-group-item list-group-item-action ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
                </nav>
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />}/>
                    <Route path="/signup" element={<Signup />}/>
                </Routes>
            </div>
        </div>
    );
}
export default Project;

