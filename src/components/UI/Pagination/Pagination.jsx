import React from 'react';
import MyButton from "../Button/MyButton";
import styles from './Pagination.module.css'

const Pagination = ({toNext, toPrev}) => {

    return (
        <div className={styles.pagination}>
            {toPrev && <MyButton className={styles.button} onClick={toPrev}><p className={styles.arrow_left}></p>Previous page</MyButton>}
            {toNext && <MyButton  className={styles.button} onClick={toNext}>Next page <p className={styles.arrow_right}></p></MyButton>}
        </div>
    );
};

export default Pagination;