import React, { useState } from 'react'
import styles from './VideoCard.module.css'
import { usePlayList } from 'context'

const VideoCard = ({ video, setCurrentClickedVideo }) => {
    const { _id, title, creator, duration, views, uploaded } = video
    const [displayContainer, setDisplayContainer] = useState(false);
    const { setShowModal } = usePlayList();

    const saveToPlaylistHandler = () => {
        setDisplayContainer(pre => !pre)
        setShowModal(true);
        setCurrentClickedVideo(video)
    }
    return (
        <div className={` ${styles["card-vertical"]} card-vertical`}>

            <div className={`${styles["image-container"]}`}>
                <img
                    src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                    alt={title}
                    className="card-image"
                    loading="lazy"
                />
                <span className={`${styles['card-badge']} card-badge`}>{duration}</span>
                <button className="card-badge-close btn btn-icon-only">
                    <span className="material-icons"> watch_later </span>
                </button>
            </div>
            <div className="text-container">
                <div className={`${styles.modal_active} text-container-title`}>
                    <h4>{title}</h4>
                    <button className={`${styles.btn} btn btn-icon-only`}
                        onClick={() => setDisplayContainer(pre => !pre)}>
                        <span className="material-icons"> more_vert </span>
                    </button>
                    {displayContainer &&
                        <div className={`${styles.modal_btn}`}>
                            <button className="btn btn-ghost btn-icon-center">
                                <span className="material-icons"> watch_later </span>Watch later
                            </button>
                            <button className="btn btn-ghost btn-icon-center" onClick={saveToPlaylistHandler}>
                                <span className="material-icons"> playlist_add </span> save to playlist
                            </button>

                        </div>
                    }
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


