import React, { useState, useMemo } from "react";
import styles from "../../App.module.css";
import { Header } from "../../components/Header/Header";
import { TodoPanel } from "../../components/TodoPanel/TodoPanel";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoContext } from "./TodoContext";

interface TodoProviderProps {
  children: React.ReactNode;
}

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task1", description: "description 1", checked: false },
  { id: 2, name: "task2", description: "description 2", checked: false },
  {
    id: 3,
    name: "task3",
    description:
      "so long description 3 so long description 3 so long description 3",
    checked: true,
  },
];

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const selectTodoIdForEdit = (id: Todo["id"]) => {
    setTodoIdForEdit(id);
  };

  const changeTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const value = useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
