import React, { useState } from 'react';

const Todo = (props) => {
    const {todos, setTodos} = props;

    const deleteTask = (deleteI) => {
        setTodos(todos.filter((task, i) => {
            return deleteI !== i;
        }));
    }

    const handleCheck = (i) => {
        const copiedTodos = [...todos];
        copiedTodos[i].isFinished = !copiedTodos[i].isFinished;

        setTodos(copiedTodos);
    }

    return(
        <div>
            {todos.map((task, i) => {
                const taskStyle = {
                    display: "inline-block"
                };

                if (task.isFinished) {
                    taskStyle.textDecoration = "line-through";
                }
                return(
                    <div key={i}>
                        <p style={taskStyle}>{task.name}</p>
                        <input onChange={(event) => {handleCheck(i);}} type="checkbox" checked={task.isFinished} />
                        <button onClick={(event) => {deleteTask(i);}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Todo;