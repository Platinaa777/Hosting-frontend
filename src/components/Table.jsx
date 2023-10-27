import React, { useEffect, useMemo } from "react";
import HeadTable from "./HeadTable";
import User from './User'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import AddForm from "./AddForm";

const Table = ({users, remove, getUser}) => {

    return (
        <div>
            <Link to="/">
                <nav>
                    Home page
                </nav>
            </Link>
            <table>
                <HeadTable />
                {users.map(user => 
                    <User info={user} remove={remove} getUser={getUser}/>
                )}
            </table>
            <Link to="/add-form">
                <button className="button-submit">Add user</button>
            </Link>
        </div>
    );
}

export default Table;