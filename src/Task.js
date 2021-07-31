import React from 'react';
import firebase from './firebase';
import './App.css';

export default function Task({ task }) {
  const deleteTask = () => {
    const taskRef = firebase.database().ref('Task').child(task.id);
    taskRef.remove();
  };
  const completeTask = () => {
    const taskRef = firebase.database().ref('Task').child(task.id);
    taskRef.update({
      status: !task.status,
    });
  };
  return (
    <div>
      <h1>{task.title}</h1>
      <input type="checkbox" checked={task.status} onClick={completeTask} />
      <button onClick={deleteTask}>Видалити</button> <br/><br/><hr width = "33%"/>
    </div>
  );
}