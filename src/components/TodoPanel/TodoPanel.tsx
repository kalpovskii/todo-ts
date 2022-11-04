import { setUncaughtExceptionCaptureCallback } from "process";
import React, { ChangeEvent, useState } from "react";
import { LanguageVariant } from "typescript";
import styles from "./todoPanel.module.css";
import { Button } from "../Button/Button";
import { useTodo } from "../../utils ";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodoPanelProps {
  mode: "add";
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const { changeTodo, addTodo } = useTodo();
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };

    if (isEdit) {
      return changeTodo(todoItem);
    }

    addTodo(todoItem);
    setTodo(DEFAULT_TODO);
  };

  return (
    <div>
      <div className={styles.todo_panel_container}>
        <div className={styles.fields_container}>
          <div className={styles.field_container}>
            <label htmlFor="name">
              <div>Название</div>
              <input
                type="text"
                value={todo.name}
                id="name"
                name="name"
                onChange={onChange}
              />
            </label>
          </div>
          <div className={styles.field_container}>
            <label htmlFor="description">
              <div>Описание</div>
              <input
                type="text"
                value={todo.description}
                id="description"
                name="description"
                onChange={onChange}
              />
            </label>
          </div>
        </div>

        <div className={styles.button_container}>
          {!isEdit && (
            <Button onClick={onClick} color="blue">
              Добавить
            </Button>
          )}
          {isEdit && (
            <Button onClick={onClick} color="orange">
              Обновить
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
