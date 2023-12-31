import React, {useEffect} from "react";
import Table from "./components/Table";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import './App.css'

function App() {
  // пользователи
  const [users, setUsers] = React.useState([]);
  const connectionString = "https://backend-nwso.onrender.com"; // prod
  // const connectionString = "http://localhost:5213"; // local testing
    
  const DeleteUser = async (id) => {
      const response = await fetch(connectionString + `/users/${id}`, {
              method: 'DELETE'
              });

      if (response.ok) {
          const data = await response.json();
          setUsers(data);
      }
      
      return;
  };

  const EditUser = async (user, callback) => {
    const response = await fetch(connectionString + `/users/${user.id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
        const data = await response.json();
        setUsers(data);
        // отправляем ответ форме с изменение пользователя
        callback(true);
        return;
    }
    callback(false);
    return;
  };

  const CreateUser = async (user, callback) => {
      const response = await fetch(connectionString + '/users', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      });
      if (response.ok) {
          const data = await response.json();
          setUsers(data);
          // отправляем ответ формочке с добавлением пользователя
          callback(true);
          return;
      }
      callback(false);
      return;
  };

  const ShowUserList = async () => {
      const response = await fetch(connectionString + "/users");
      const newUsers = await response.json();
      setUsers(newUsers);
  }; 

  const [currentUser, setCurrentUser] = React.useState({});
  const getCurrentUser = (user) => {
    setCurrentUser(user);
  };
  
  useEffect(() => {
      ShowUserList();
  }, []);

  return (
    <div>
     <Router>
        <div className="App">
            <Routes>
                <Route path="/add-form" element={<AddForm create={CreateUser} />} />
                <Route path="/update-form" 
                        element={<EditForm 
                        edit={EditUser} editedUser={currentUser}/>} />
                <Route path="/" 
                        element={<Table users={users}
                        remove={DeleteUser} getUser={getCurrentUser}/>}/>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
