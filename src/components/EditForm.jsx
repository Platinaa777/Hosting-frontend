import React, {useState} from "react";
import {Link} from "react-router-dom"
import Input from "./Input";

const EditForm = ({edit, editedUser}) => {
    const [message, SetMessage] = React.useState('');
    // текущий пользователь которого выбрали
    const [user, setUser] = useState(
        {
         firstName: editedUser.firstName,
         lastName: editedUser.lastName,
         age: editedUser.age,
         email: editedUser.email
        });

    const GetStatusRequest = (ok) => {
        if (ok) {
            SetMessage("Пользователь успешно изменился!")
        } else {
            SetMessage("Не удалось изменить пользователя");
        }
    }

    const editUser = (e) => {
        e.preventDefault();

        const newUser = {
          id: editedUser.id,
          firstName: user.firstName,
          lastName: user.lastName,
          Age: user.age,
          email: user.email
        };
        edit(newUser, GetStatusRequest);
        setUser(
            {
                firstName: editedUser.firstName,
                lastName: editedUser.lastName,
                age: editedUser.age,
                email: editedUser.email
            })
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
                <h1>{message}</h1>
            }
        </div>
    );
}

export default EditForm;