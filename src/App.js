import React from 'react';
import { Provider } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
