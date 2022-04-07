import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./PlayListCard.module.css"
import { deletePlaylist } from 'utilities'
import { useAuth, usePlayList } from 'context'


const PlayListCard = ({ playlist }) => {
    const { videos, title, _id } = playlist
    const { token } = useAuth();
    const { playListDispatch } = usePlayList()
    const image_id = videos.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI"

    const playlistDeleteHandler = () => {
        deletePlaylist(playListDispatch, token, _id);
    }
    return (
        <div className={` ${styles["card-vertical"]} card-vertical`}>
            <Link to={`/playlist/${_id}`} >
                <div className={`${styles["image-container"]}`}>
                    <img
                        src={`https://i.ytimg.com/vi/${image_id}/hq720.jpg`}
                        alt=""
                        className="card-image"
                        loading="lazy"
                    />
                    <span className={`${styles['card-badge']} card-badge `}>
                        <span className='material-icons'>playlist_play</span>
                        {videos.length}
                    </span>
                </div>
            </Link>
            <div className="text-container">
                <div className="text-container-title">
                    <h4>{title}</h4>
                    <button title="Delete" className={`${styles.btn} btn btn-icon-only`}>
                        <span className="material-icons" onClick={playlistDeleteHandler}> delete </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { PlayListCard }