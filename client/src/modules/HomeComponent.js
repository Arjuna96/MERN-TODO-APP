import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoComponent from '../modules/ToDoComponent';
import ToDoFormComponent from '../modules/ToDoFormComponent';

export default function HomeComponent() {
  const [todos, setTodos] = useState([{}]);

  const [currentUser, setcurrentUser] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setcurrentUser(localStorage.getItem('user'));
      getTodo();
    }
  }, [currentUser]);

  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = (text) => {
    getTodo();
  };

  const getTodo = () => {
    const httpHeaders = {
      params: {
        username: currentUser,
      },
    };

    Axios.get('http://localhost:5000/get/todo-active', httpHeaders)
      .then((result) => {
        setTodos(result.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <ToDoFormComponent addTodo={addTodo} />
        <div>
          {todos &&
            todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <ToDoComponent key={index} index={index} todo={todo} getTodo={getTodo} />
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
