import React from 'react';
import './App.css';
import firebase from './Firebase';

export default function Task({ task }) {
    const deleteTask = () => {
        const taskRef = firebase.database().ref("Task").child(task.id);
        taskRef.remove();
    };
    const check = () =>{
        const taskRef = firebase.database().ref('Task').child(task.id);
        taskRef.update({
            check: !task.check,
        })
    }
    return (
    <div>
        <h1> {task.title} </h1>
        <button class = 'but' onClick = {deleteTask}> Видалити </button>
        <input type = 'checkbox' onClick = {check} />
    </div>
    )
}