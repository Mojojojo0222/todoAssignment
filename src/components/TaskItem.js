import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/taskSlice';
import EditTaskModal from './EditTaskModal';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => setEditModalOpen(true)}>Edit</button>

      {isEditModalOpen && <EditTaskModal task={task} onClose={() => setEditModalOpen(false)} />}
    </div>
  );
};

export default TaskItem;
