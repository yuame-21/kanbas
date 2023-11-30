import React, { useState, useEffect } from "react";
import * as client from "./client";
import {BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil}
    from "react-icons/bs";
import {Link} from "react-router-dom";
function UserTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);

    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                <tr>
                    <td>
                        <label htmlFor="user" className="form-label">Username</label>
                        <input id="user" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id="password" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                        </div>
                    </td>
                    <td>
                        <label htmlFor="first" className="form-label">First Name</label>
                        <input id="first" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                    </td>
                    <td>
                        <label htmlFor="last" className="form-label">Last Name</label>
                        <input id="last" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                    </td>
                    <td>
                        <label htmlFor="user_type" className="form-label">User Type</label>
                        <select id="user_type" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </td>
                    <td className="text-nowrap">
                        <BsFillCheckCircleFill onClick={updateUser}
                                               className="me-2 text-success fs-1 text" />
                        <BsPlusCircleFill onClick={createUser}
                                          className="text-success fs-1 text" />
                    </td>

                </tr>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>
                            <Link to={`/project/account/${user._id}`}>
                            {user.username}
                            </Link>
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <button className="btn btn-warning me-2">
                            <BsPencil onClick={() => selectUser(user)} />
                        </button>
                        <button onClick={() => deleteUser(user)}>
                            <BsTrash3Fill />
                        </button>

                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;

