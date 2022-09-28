import { setUncaughtExceptionCaptureCallback } from "process";
import React, { ChangeEvent, useState } from "react";
import { LanguageVariant } from "typescript";
import styles from './todoPanel.module.css'


const DEFAULT_TODO = {
    name: '',
    description: ''
}


export const TodoPanel = () => {

    const [todo, setTodo] = useState(DEFAULT_TODO);
    console.log('@todo', todo);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })
    }

    return (
        <div>
            <div className={styles.todo_panel_container}>
                <div className={styles.fields_container}>
                    <div className={styles.field_container}>
                        <label htmlFor="name">
                            <div>name</div>
                            <input type="text" value={todo.name} id='name' name='name' onChange={onChange} />
                        </label>
                    </div>
                    <div className={styles.field_container}>
                        <label htmlFor="description">
                            <div>description</div>
                            <input type="text" value={todo.description} id='description' name='description' onChange={onChange} />
                        </label>
                    </div>
                </div>

                <div className={styles.button_container}>
                    <button>
                        ADD
                    </button>
                </div>
            </div>
        </div>



    )
};