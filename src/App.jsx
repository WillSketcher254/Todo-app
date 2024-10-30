import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';

const App = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTask = (event) => {
        event.preventDefault();
        if (editIndex !== null) {
            const updatedTasks = tasks.map((task, index) => 
                index === editIndex ? { ...task, text: input } : task
            );
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, { text: input, completed: false }]);
        }
        setInput("");
    };

    const handleEditTask = (index) => {
        setInput(tasks[index].text);
        setEditIndex(index);
    };

    const handleDeleteTask = (index) => {
        const filteredTasks = tasks.filter((_, i) => i !== index);
        setTasks(filteredTasks);
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className='box bg-blue-700 '>
                <Header />
                <Form
                    input={input}
                    setInput={setInput}
                    handleAddTask={handleAddTask}
                />
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className='bg-slate-900 m-5 px-5 rounded-2xl '>
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                            <button className='m-3 p-1 hover:bg-blue-500' onClick={() => handleEditTask(index)}>Edit</button> 
                            <button className='m-3 p-1 hover:bg-blue-500' onClick={() => handleDeleteTask(index)}>Delete</button>
                            <button className='m-3 p-1 hover:bg-blue-500' onClick={() => toggleTaskCompletion(index)}>
                                {task.completed ? 'Unmark' : 'Complete'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;