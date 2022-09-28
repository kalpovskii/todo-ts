import React, { useState } from 'react';

import { Header } from './components/header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';


import styles from './App.module.css';



const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task1', description: 'description 1', checked: false },
  { id: 2, name: 'task2', description: 'description 2', checked: false },
  { id: 3, 
    name: 'task3', 
    description: 'so long description 3 so long description 3 so long description 3', 
    checked: true 
  },
];

export const App = () => {
  console.log('@todos', DEFAULT_TODO_LIST);

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  return(
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length}></Header>
        <TodoPanel></TodoPanel>
      </div>
    </div>
  );
}; 
