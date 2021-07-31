import React, { useState} from 'react';
import firebase  from './firebase';
export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    
    const createTask = () => {
        const taskRef = firebase.database().ref("Task");
        setTitle('');
        const task = {
            title,
            status: false,
        };
        taskRef.push(task);
    };

    return (
        <div>
            <input type ="text" onChange={handleOnChange} value={title} /> <br/><br/>     
            <button onClick={createTask}> Додати </button>
        </div>
    );
}