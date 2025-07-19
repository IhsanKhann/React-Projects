import { useState } from 'react';
import './App.css';
import List from './components/List.jsx';

function App() {
  const [Tasks, setTasks] = useState([
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
    { id: 3, task: 'Task 3' },
  ]);

  const [ValueInput, setValueInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    if (ValueInput.trim() !== '') {
      const newTask = {
        id: Tasks.length + 1,
        task: ValueInput,
      };

      // Use spread operator correctly
      setTasks([...Tasks, newTask]);
      setValueInput('');
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    let id = Number(prompt("Enter the task id to remove:"))
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="todoList">
        <div className="inputBar">
          <input
            type="text"
            placeholder="Add a task..."
            value={ValueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button className="addTask" onClick={handleAdd}>
            Add Task
          </button>
          <button className='removeTask' onClick={handleRemove}> Remove task </button>
        </div>

        <div className="tasks">
          <List items={Tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
