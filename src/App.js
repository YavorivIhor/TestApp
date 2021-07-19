import React, { useState, useEffect } from 'react';
import firebase from './Firebase';
import './App.css';
import Task from './Task';

export default function App(){
  const [title, setTitle] = useState('');
  const [taskList, setTaskList] = useState();

  const handleChange = (e) => {
      setTitle(e.target.value)
  }
  const appendData = () =>{
      const taskRef = firebase.database().ref("Task");
      setTitle('');
      const task = {
          title,
          check: false,
      };
      taskRef.push(task);
  }

  useEffect(() => {
    const taskRef = firebase.database().ref('Task');
    taskRef.on('value', (snapshot) => {
      const tasks = snapshot.val();
      const taskList = []
      for (let id in tasks){
        taskList.push({id, ...tasks[id]});
      }
      //console.log(taskList);
      setTaskList(taskList);
    });
  }, []);

  return (
    <div>
      <h1> Завдання </h1> 
      <div>
        <textarea rows="5" cols="20" onChange = {handleChange} value={title}  label ='title'/><br/>
        <button class = 'but' onClick = {appendData}> Додати </button><br/><hr/>
        {taskList ? taskList.map((task, index) => <Task task={task} key={index} />) : ''}
      </div>
    </div>
  )
}
