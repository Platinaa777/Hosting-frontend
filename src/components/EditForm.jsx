import React, {useState} from "react";
import {Link} from "react-router-dom"
import Input from "./Input";

const EditForm = ({edit, editedUser}) => {
    const [isSent, setIsSent] = React.useState(false);

    const [user, setUser] = useState(
        {
         firstName: editedUser.firstName,
         lastName: editedUser.lastName,
         age: editedUser.age,
         email: editedUser.email});

    const editUser = (e) => {
        e.preventDefault();

        const newUser = {
          id: editedUser.id,
          firstName: user.firstName,
          lastName: user.lastName,
          Age: user.age,
          email: user.email
        };
        edit(newUser);
        setUser({firstName: '', lastName: '', age: 0, email: ""})
        setIsSent(true);
      };

    return (
        <div>
            <Link to="/">
                <nav>
                    Home page
                </nav>
            </Link>
            <h1>Edit page</h1>
            <form>
                <div>
                <label>Input new FirstName </label>
                <Input 
                    value={user.firstName}
                    type="text"
                    placeholder="Input firstname"
                    onChange={e => setUser({...user, firstName: e.target.value})}
                    />
                </div>
                <div>
                <label>Input new LastName </label>
                <Input 
                    value={user.lastName}
                    type="text"
                    placeholder="Input lastname"
                    onChange={e => setUser({...user, lastName: e.target.value})}
                    />
                </div>
                <div>
                <label>Input new Age </label>
                <Input 
                    value={user.age}
                    type="text"
                    placeholder="Input age"
                    onChange={e => setUser({...user, age: e.target.value})}
                    />
                </div>
                <div>
                <label>Input new email </label>
                <Input 
                    value={user.email}
                    type="text"
                    placeholder="Input email"
                    onChange={e => setUser({...user, email: e.target.value})}
                    />
                </div>
                <button className="button-submit" onClick={editUser}>Edit user</button>
            </form>
            {
                isSent 
                ? <p className="request-text">Your request was sent to the server, please check main page to know about changes</p>
                : ""
            }
        </div>
    );
}

export default EditForm;