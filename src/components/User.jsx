import React from "react";
import { Link } from "react-router-dom";

const User = ({info, remove, getUser}) => {
    // getUser функция нужна для того чтобы в формочке были уже заполнены поля пользователя
    return (
        <tr>
            <td>{info.id}</td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.age}</td>
            <td>{info.email}</td>
            <td>
                <Link to="/update-form" onClick={() => getUser(info)}> 
                    <button className="button-edit">Edit</button>
                </Link>
            </td>
            <td>
                <button className="button-red"onClick={() => remove(info.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default User;