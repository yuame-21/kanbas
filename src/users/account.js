import * as client from "./client";
import React, { useState, useEffect } from "react";
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import UserTable from "./table";
function Account() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input id="pass" className="form-control" value={account.password}
                           onChange={(e) => setAccount({ ...account,
                                                           password: e.target.value })}/>
                    <label htmlFor="first" className="form-control">First Name</label>
                    <input id="first" className="form-control" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    <label htmlFor="last" className="form-control">Last Name</label>
                    <input id="last" className="form-control" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    <label htmlFor="dob" className="form-control">Date of Birth</label>
                    <input id="dob" className="form-control" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    <label htmlFor="email" className="form-control">Email</label>
                    <input className="form-control" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    <label htmlFor="role" className="form-control">User Role</label>
                    <select id="role" className="form-control" onChange={(e) => setAccount({ ...account,
                                                            role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            )}
            <button onClick={save}>
                Save
            </button>
            <button onClick={signout}>
                Signout
            </button>


            <Link to="/project/admin/users" className="btn btn-warning w-100">
                Users
            </Link>


        </div>
    );
}
export default Account;