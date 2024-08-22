import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        'Išplauti indus',
        'Pasigaminti pietus',
        'Tęsti mokslus',
    ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        // event - inputo vidaus reiksme, tai ka ivedame.
        setNewTask(event.target.value);
    }
    function addTask() {}
    function deleteTask(index) {}
    function moveTaskUp(index) {}
    function moveTaskDown(index) {}
    return (
        <>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={newTask}
                    onClick={handleInputChange}
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
