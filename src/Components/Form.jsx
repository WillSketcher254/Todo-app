import React from 'react';

const Form = ({ input, setInput, handleAddTask }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form onSubmit={handleAddTask} className='color-white-100 px-20'>
            <input 
                type='text' 
                placeholder='Enter a task' 
                className='task px-5 py-3 rounded-full m-3'
                value={input}
                onChange={onInputChange}
            />
            <button className='button bg-blue-500 hover:bg-slate-600 py-1 m-2' type='submit'>Add</button>
        </form>
    );
};

export default Form;