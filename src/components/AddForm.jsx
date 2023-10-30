import React, {useState} from "react";
import {Link} from "react-router-dom"
import Input from "./Input";

const AddForm = ({create}) => {
    // сообщение которое оповещает пользователя об успешности операции
    const [message, SetMessage] = React.useState('');

    const [user, setUser] = useState(
        {firstName: '', lastName: '', age: 0, email: ""});

    const addNewPost = (e) => {
        e.preventDefault();   
        const newUser = {
          firstName: user.firstName,
          lastName: user.lastName,
          Age: user.age,
          email: user.email
        };

        create(newUser, GetStatusRequest);
        setUser({firstName: '', lastName: '', age: 0, email: ""})
      };

      const GetStatusRequest = (ok) => {
        if (ok) {
            SetMessage("Пользователь успешно добавился!")
        } else {
            SetMessage("Не удалось добавить пользователя");
        }
    }

    return (
        <div>
            <Link to="/">
                <nav>
                    Home page
                </nav>
            </Link>
            <h1>Add page</h1>
            <form>
                <div>
                <label>Input FirstName </label>
                <Input 
                    value={user.firstName}
                    type="text"
                    placeholder="Input firstname"
                    onChange={e => setUser({...user, firstName: e.target.value})}
                    />
                </div>
                <div>
                <label>Input LastName </label>
                <Input 
                    value={user.lastName}
                    type="text"
                    placeholder="Input lastname"
                    onChange={e => setUser({...user, lastName: e.target.value})}
                    />
                </div>
                <div>
                <label>Input Age </label>
                <Input 
                    value={user.age}
                    type="text"
                    placeholder="Input age"
                    onChange={e => setUser({...user, age: e.target.value})}
                    />
                </div>
                <div>
                <label>Input email </label>
                <Input 
                    value={user.email}
                    type="text"
                    placeholder="Input email"
                    onChange={e => setUser({...user, email: e.target.value})}
                    />
                </div>
                <button className="button-submit" onClick={addNewPost}>Add new user</button>
            </form>
            {
                <h1>{message}</h1>
            }
        </div>
    );
}

export default AddForm;