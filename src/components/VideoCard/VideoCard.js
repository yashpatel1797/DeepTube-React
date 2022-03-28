import React from 'react'
import styles from './VideoCard.module.css'
const VideoCard = ({ video }) => {
    const { _id, title, creator, duration, views, uploaded } = video
    return (
        <div className={` ${styles["card-vertical"]} card-vertical`}>

            <div className={`${styles["image-container"]}`}>
                <img
                    src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                    alt=""
                    className="card-image"
                    loading="lazy"
                />
                <span className={`${styles['card-badge']} card-badge`}>{duration}</span>
                <button className="card-badge-close btn btn-icon-only">
                    <span className="material-icons"> watch_later </span>
                </button>
            </div>
            <div className="text-container">
                <div className="text-container-title">
                    <h4>{title}</h4>
                    <button className={`${styles.btn} btn btn-icon-only`}>
                        <span className="material-icons"> more_vert </span>
                    </button>
                </div>
                <div className="text-container-desc">
                    <p> {creator}</p>
                    <span className={styles.desc__views}>
                        {views} views
                    </span>
                    <span className={styles.desc__views}>
                        {uploaded} years ago
                    </span>
                </div>
            </div>

        </div>
    )
}

export { VideoCard }


