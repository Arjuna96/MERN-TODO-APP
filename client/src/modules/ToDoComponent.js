import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css';
import { Button } from 'react-bootstrap';
import EditToDoFormComponent from './EditToDoFormComponent';

export default function ToDoComponent({ todo, index, getTodo }) {
  const [showPopup, setShowPopup] = useState(false);
  const [editItem, setEditItem] = useState({});
  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  const editTodo = () => {
    getTodo();
  };

  const markTodo = (item) => {
    item.isDone = !item.isDone;

    Axios.put(
      'http://localhost:5000/edit/complete',
      {
        id: item._id,
        isDone: item.isDone,
      },
      {}
    )
      .then((result) => {
        getTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeTodo = (item) => {
    Axios.delete(`http://localhost:5000/remove/todo/${item._id}`)
      .then((result) => {
        console.log('res' + JSON.stringify(result));
        getTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.todo}</span>
        <div>
          {/* edit is disabled if todo is completed */}
          <Button
            disabled={todo.isDone}
            variant="outline-warning"
            onClick={() => {
              handleShow(true);
              setEditItem(todo);
            }}
          >
            Edit
          </Button>{' '}
          <Button variant="outline-success" onClick={() => markTodo(todo)}>
            ✓
          </Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(todo)}>
            ✕
          </Button>
        </div>
      </div>
      {showPopup && <EditToDoFormComponent showPopup={showPopup} handleClose={handleClose} editTodo={editTodo} editItem={editItem} />}
    </>
  );
}
