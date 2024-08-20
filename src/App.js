import React, {useEffect, useState} from 'react';
import styles from './App.module.css';


function App() {
    const [todos, setTodos] = useState([])

    const [userId, setUserId] = useState(1)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
            .then((loadedData) => loadedData.json())
            .then((loadedTodos) => {
                setTodos(loadedTodos);
            });
    }, [userId]);
    const completed = todos.filter((item) => item.completed)
    const unCompleted = todos.filter((item) => !item.completed)

    const selectUserId = (e) => {
        setUserId(e.target.value)
    }

    return (
        <div className={styles.app}>
            <div className={styles.headerWrap}>
                <div className={styles.selectUser}>Текущий юзер: {userId}</div>
                <select className={styles.selectNumber} value={userId} onChange={selectUserId}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className={styles.listWrap}>
                <div className={styles.list}>
                    <h2>Сделано</h2>
                    {completed.map(({id, title}) => (
                        <div className={styles.todo} key={id}>{title}</div>
                    ))}
                </div>

                <div className={styles.list}>
                    <h2>Не сделано</h2>
                    {unCompleted.map(({id, title}) => (
                        <div className={styles.todo} key={id}>{title}</div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default App;
