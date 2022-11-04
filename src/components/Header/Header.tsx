import React from "react";
import styles from "./header.module.css";
import { useTodo } from "../../utils ";

export const Header: React.FC = () => {
  const { todos } = useTodo()
  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>
        Добавлено <b>{todos.length}</b> задания/ий
      </div>
    </div>
  );
};
