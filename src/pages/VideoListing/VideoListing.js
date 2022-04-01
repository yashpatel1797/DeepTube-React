import React, { useState } from 'react'
import { useVideo, usePlayList } from 'context'
import { VideoCard, SideBar } from 'components'
import styles from "./VideoListing.module.css"
import classes from "styles/grid.module.css"
import { PlayListModal } from 'components'

const VideoListing = () => {
    const { videoList } = useVideo();
    const [currentClickedVideo, setCurrentClickedVideo] = useState(null)
    const { showModal } = usePlayList();

    return (
        <>
            {showModal && <PlayListModal video={currentClickedVideo} key={currentClickedVideo._id} />}
            <div className="filter-products">
                <div className={classes.grid_15_85}>
                    <SideBar />
                    <div className={`${styles["grid-4-column"]} grid-4-column`}>
                        {videoList.map(video =>
                            <VideoCard
                                video={video}
                                key={video._id}
                                setCurrentClickedVideo={setCurrentClickedVideo}
                            />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { VideoListing }