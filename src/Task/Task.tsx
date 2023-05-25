import React from 'react';


interface ITaskProps {
    text: string;
    onRemoveTask: React.MouseEventHandler;
}


const Task:React.FC<ITaskProps> = (props) => {
    return (
        <div className='task-wrap'>
            <p className='task'>{props.text}</p>
            <button className='del-btn' onClick={props.onRemoveTask}></button>
        </div>
    );
};

export default Task;