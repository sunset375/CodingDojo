import React, { useState } from 'react';
import Todo from './Todo';

const Forms = (props) => {
    const [todos, setTodos] = useState([]);

    const [task, setTask] = useState({name: "", isFinished: false});

    const onChange = (event) => {
        setTask({
            name: event.target.value,
            isFinished: false
        });
    };

    const addTask = (event) => {
        event.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos);

        setTask({name: "", isFinished: false});
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <input type="text" name="task" onChange={onChange} value={task.name} />
                <input type="submit" value="Add" />
            </form>
            <Todo todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Forms;