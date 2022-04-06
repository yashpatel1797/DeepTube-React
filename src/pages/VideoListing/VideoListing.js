import React, { useState } from 'react'
import { useVideo, usePlayList } from 'context'
import { VideoCard, SideBar } from 'components'
import styles from "./VideoListing.module.css"
import classes from "styles/grid.module.css"
import { PlayListModal } from 'components'
import { filterFunction } from 'utilities'
const VideoListing = () => {
    const [category, setCategory] = useState("All");
    const { videoList, searchQuery } = useVideo();
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
                        <div className={styles.category} >
                            <span
                                className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "All" ? styles.active : ""}`}
                                onClick={() => setCategory("All")}
                            >All
                            </span>
                            <span
                                className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "David Fincher" ? styles.active : ""}`}
                                onClick={() => setCategory("David Fincher")}
                            >David Fincher
                            </span>
                            <span
                                className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Christopher Nolan" ? styles.active : ""}`}
                                onClick={() => setCategory("Christopher Nolan")}
                            >Christopher Nolan
                            </span>
                            <span
                                className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Quentin Tarantino" ? styles.active : ""}`}
                                onClick={() => setCategory("Quentin Tarantino")}
                            >Quentin Tarantino
                            </span>
                            <span
                                className={`${styles["chip-content"]} chip-content ${styles.chip} chip ${category === "Martin Scorsese" ? styles.active : ""}`}
                                onClick={() => setCategory("Martin Scorsese")}
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
                    </div>
                </div>
            </div>
        </>
    )
}

export { VideoListing }