import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import {nanoid} from "nanoid";


const App = () => {
    const [tasks, setTasks] = useState([
        {text: 'Make homework-53', id: '123'},
        {text: 'Play a games', id: '12323'},
        {text: 'Watch films', id: '442421'},
    ]);

    const [currentTask, setCurrentTask] = useState('')
    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const addTask = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask = {
            id: nanoid(),
            text: currentTask
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: string) => {
        const taskCopy = [...tasks];
        const index = tasks.findIndex(task => task.id === id);
        taskCopy.splice(index, 1);
        setTasks(taskCopy);
    };


    return (
        <div className="App">
            <div className='todo-wrap'>
                <h2>To Do List:</h2>
                <AddTaskForm onAddTask={event => addTask(event)}
                             onChangeText={event => changeText(event)}
                />
                {tasks.map((task) => (
                    <Task text={task.text}
                          onRemoveTask={() => removeTask(task.id)}
                          key={task.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
