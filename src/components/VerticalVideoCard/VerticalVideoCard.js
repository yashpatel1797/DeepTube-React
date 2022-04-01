import React from 'react'
import styles from "./VerticalVideoCard.module.css"

const VerticalVideoCard = ({ videos, urlId, deleteDispatch, deleteVideoFrom }) => {

    const videoDeleteHandler = (videoId) => {
        deleteVideoFrom(videoId, urlId, deleteDispatch)
    }
    return (
        <>
            {videos.map(({ _id, title, creator, duration }) =>
                <div className="card-horizontal" key={_id}>
                    <div className="image-container">
                        <img
                            src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
                            alt={title}
                            className={`${styles["card-image"]}`}
                        />
                        <span className={`${styles["card-badge"]} card-badge`}>{duration}</span>
                    </div>
                    <div className="text-container">
                        <div className="text-container-title">
                            <h4>{title}</h4>
                            <button className="btn btn-icon-only">
                                <span className="material-icons"
                                    onClick={() => videoDeleteHandler(_id)}>
                                    delete
                                </span>
                            </button>
                        </div>
                        <div className="text-container-desc">
                            <p>{creator}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { VerticalVideoCard }