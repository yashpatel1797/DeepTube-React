import React from 'react'
import { usePlayList } from 'context'
import { useNavigate, useParams } from "react-router-dom"
import { deletePlaylist } from 'utilities'
import styles from "./PageInfoCard.module.css"

const PageInfoCard = () => {
    const navigate = useNavigate();
    const { playlists, playListDispatch } = usePlayList();
    const { playlistId } = useParams();
    const data = playlists.find((playlist) => playlist._id === playlistId)
    const videos = data.videos;
    const image_id = videos.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI";

    const playlistDeleteHandler = () => {
        deletePlaylist(playlistId, playListDispatch);
        navigate("/playlist")
    }
    return (
        <>
            <div className={` ${styles["card-vertical"]} card-vertical`}>
                <div className={`${styles["image-container"]}`}>
                    <img
                        src={`https://i.ytimg.com/vi/${image_id}/hq720.jpg`}
                        alt=""
                        className="card-image"
                        loading="lazy"
                    />
                </div>
                <div className="text-container">
                    <div className="text-container-title">
                        <h4>{data.title}</h4>
                        <button className={`${styles.btn} btn btn-icon-only`}>
                            <span className="material-icons" onClick={playlistDeleteHandler}> delete </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PageInfoCard }