import React, { useState } from 'react'
import { useVideo, usePlayList } from 'context'
import { VideoCard, SideBar, EmptyData } from 'components'
import styles from "./VideoListing.module.css"
import classes from "styles/grid.module.css"
import { PlayListModal } from 'components'
import { filterFunction } from 'utilities'
const VideoListing = () => {
    const { videoList, searchQuery, category, videoDispatch } = useVideo();
    const [currentClickedVideo, setCurrentClickedVideo] = useState(null)
    const { showModal } = usePlayList();
    const filteredVideo = filterFunction(videoList, searchQuery, category)
    return (
        <>
            {showModal && <PlayListModal video={currentClickedVideo} key={currentClickedVideo._id} />}
            <div className="filter-products">
                <div className={classes.grid_15_85}>
                    <SideBar />
                    <div>
                        {filteredVideo.length <= 0 ? <EmptyData /> : (<>
                            <div className={styles.category} >
                                <span
                                    className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "All" ? styles.active : ""}`}
                                    onClick={() => videoDispatch({ type: "FILTER_BY_CATEGORY", payload: "All" })}
                                >All
                                </span>
                                <span
                                    className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "David Fincher" ? styles.active : ""}`}
                                    onClick={() => videoDispatch({ type: "FILTER_BY_CATEGORY", payload: "David Fincher" })}
                                >David Fincher
                                </span>
                                <span
                                    className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Christopher Nolan" ? styles.active : ""}`}
                                    onClick={() => videoDispatch({ type: "FILTER_BY_CATEGORY", payload: "Christopher Nolan" })}
                                >Christopher Nolan
                                </span>
                                <span
                                    className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Quentin Tarantino" ? styles.active : ""}`}
                                    onClick={() => videoDispatch({ type: "FILTER_BY_CATEGORY", payload: "Quentin Tarantino" })}
                                >Quentin Tarantino
                                </span>
                                <span
                                    className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Martin Scorsese" ? styles.active : ""}`}
                                    onClick={() => videoDispatch({ type: "FILTER_BY_CATEGORY", payload: "Martin Scorsese" })}
                                >Martin Scorsese
                                </span>
                            </div>
                            <div className={`${styles["grid-4-column"]} grid-4-column`}>
                                {filteredVideo.map(video =>
                                    <VideoCard
                                        video={video}
                                        key={video._id}
                                        setCurrentClickedVideo={setCurrentClickedVideo}
                                    />)
                                }
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export { VideoListing }