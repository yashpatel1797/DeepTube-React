import React from 'react'
import { usePlayList, useAuth } from 'context'
import { useParams, Link, useNavigate } from "react-router-dom"
import styles from "./VerticalVideoCard.module.css"

const VerticalVideoCard = ({ videos, deleteVideoFrom }) => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const { playListDispatch } = usePlayList();
    const { playlistId } = useParams();

    const videoDeleteHandler = (videoId) => {
        deleteVideoFrom(videoId, playListDispatch, token, playlistId)
    }
    return (
        <>
            {videos?.map(({ _id, title, creator, duration }) =>
                <div className={`${styles["card-horizontal"]} card-horizontal`} key={_id}>
                    <div className="image-container">
                        <Link to={`/video/${_id}`}>
                            <img
                                src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                                alt={title}
                                className={`${styles["card-image"]}`}
                            />
                            <span className={`${styles["card-badge"]} card-badge`}>{duration}</span>
                        </Link>
                    </div>
                    <div className="text-container" onClick={() => navigate(`/video/${_id}`)}>
                        <div className="text-container-title">
                            <h4>{title}</h4>
                        </div>
                        <div className="text-container-desc">
                            <p>{creator}</p>
                        </div>
                    </div>
                    <button title="Delete" className="btn btn-icon-only">
                        <span title="Delete" className="material-icons"
                            onClick={() => videoDeleteHandler(_id)}>
                            delete
                        </span>
                    </button>
                </div>
            )}
        </>
    )
}

export { VerticalVideoCard }