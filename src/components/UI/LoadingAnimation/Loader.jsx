import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div>
        <div className={classes.loader}>
        </div>
        <p className={classes.loadingSign}>Fetching data</p>
        </div>
    );
};

export default Loader;