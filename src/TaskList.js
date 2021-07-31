import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Task from './Task';

export default function TaskList() {
    const [taskList, setTaskList] = useState();

    useEffect(() => {
      const taskRef = firebase.database().ref('Task');
      taskRef.on('value', (snapshot) => {
        const tasks = snapshot.val();
        const taskList = [];
        for (let id in tasks) {
          taskList.push({ id, ...tasks[id] });
        }
        setTaskList(taskList);
      });
    }, []);
  
    return (
      <div>
        {taskList ? taskList.map((task, index) => <Task task={task} key={index}/>): '' }
      </div>
    );
  }