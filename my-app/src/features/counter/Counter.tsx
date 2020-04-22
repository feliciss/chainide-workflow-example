import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    compile,
    deploy,
    interact,
    incrementAsync,
    selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.asyncButton}
                    onClick={() =>
                        dispatch(compile())
                    }
                >
                    Compile
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(deploy())}
                >
                    Deploy
                </button>

                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(interact())}
                >
                    Interact
                </button>
            </div>
            <span className={styles.value}>{count}</span>
        </div>
    );
}
