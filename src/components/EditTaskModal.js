import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/taskSlice';

const EditTaskModal = ({ task, onClose }) => {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      dispatch(updateTask({ id: task.id, newText }));
      onClose();
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button  type="submit">Save</button>
        <button  type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTaskModal;
