import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={`${styles["overlay-text"]} overlay-text`}>
            <TailSpin ariaLabel="loading-indicator" height={80} width={80} />
        </div>
    )
}

export { Loader }