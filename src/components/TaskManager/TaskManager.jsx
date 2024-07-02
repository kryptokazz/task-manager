import React, { useState } from 'react';

const initialTaskState = {
  title: '',
  notes: '',
  dueDate: '',
  completed: false
};

const TaskManager = () => {
  const [task, setTask] = useState(initialTaskState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setTask(prevTask => ({
      ...prevTask,
      [name]: newValue
    }));
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="title" value={task.title} onChange={handleChange} />

      <label>Notes:</label>
      <textarea name="notes" value={task.notes} onChange={handleChange} />

      <label>Due Date:</label>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />

      <label>Completion Status:</label>
      <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} />
    </div>
  );
};

export default TaskManager;
  
