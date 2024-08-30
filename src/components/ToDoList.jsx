import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        // event - inputo vidaus reiksme, tai ka ivedame.
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks((t) => [...t, newTask]);
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, indx) => indx !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        const updatedTask = [...tasks];
        if (index > 0) {
            [updatedTask[index], updatedTask[index - 1]] = [
                updatedTask[index - 1],
                updatedTask[index],
            ];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
        const updatedTask = [...tasks];
        if (index < tasks.length - 1) {
            [updatedTask[index], updatedTask[index + 1]] = [
                updatedTask[index + 1],
                updatedTask[index],
            ];
            setTasks(updatedTask);
        }
    }

    return (
        <>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    ADD
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            moveUp
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            moveDown
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;
