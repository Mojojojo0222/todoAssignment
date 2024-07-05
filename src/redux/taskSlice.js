import { createSlice } from '@reduxjs/toolkit';


export const tasksSlice = createSlice({
  name: 'tasks', // Slice name for identification
  initialState: {
    tasks: [], // empty array for tasks
  },
  reducers: {
    // function to add a new task to the tasks array
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
  
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    toggleTask: (state, action) => {
      // Find the task by id and toggle its 'completed' property
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  
    updateTask: (state, action) => {
      
      const { id, newText } = action.payload;
    
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, updateTask } = tasksSlice.actions;

// Export the  function to manage state changes for tasks
export default tasksSlice.reducer;
