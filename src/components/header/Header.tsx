import React from "react"
import styles from './header.module.css'



interface HeaderCount {
    todoCount: number;
}


export const Header: React.FC<HeaderCount> = ({ todoCount }) => 
    <div className={styles.header_container}>
        <div className={styles.header_title}> 
            Todo list <b>{todoCount}</b> task(s)
        </div>
    </div>
