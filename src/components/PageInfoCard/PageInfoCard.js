import React from 'react'
import { usePlayList } from 'context'
import { useNavigate, useParams } from "react-router-dom"
import styles from "./PageInfoCard.module.css"

const PageInfoCard = ({ image_id, title, deleteButton }) => {
    const navigate = useNavigate();
    const { playListDispatch } = usePlayList();
    const { playlistId } = useParams();

    const playlistDeleteHandler = () => {
        deleteButton(playListDispatch, playlistId);
        playlistId && navigate("/playlist");
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
                        <h4>{title}</h4>
                        {deleteButton && <button className={`${styles.btn} btn btn-icon-only`}>
                            <span className="material-icons" onClick={playlistDeleteHandler}> delete </span>
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export { PageInfoCard }