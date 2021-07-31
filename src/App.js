import React from 'react';
import './App.css';
import Form from "./Form";
import TaskList from './TaskList';

export default function App() {
  return (
    <div className="App">
      <h1>Завдання</h1>
      <Form /><br/><hr width="55%"/>
      <TaskList />
    </div>
  );
}