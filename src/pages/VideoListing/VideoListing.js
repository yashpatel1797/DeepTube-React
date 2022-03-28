import React from 'react'
import { useVideo } from 'context'
import { VideoCard, SideBar } from 'components'
import styles from "./VideoListing.module.css"

const VideoListing = () => {
    const { videoList } = useVideo();

    return (
        <> <div className="spacer-3rem"></div>
            <div className="filter-products">
                <div className={styles.grid_15_85}>
                    <SideBar />
                    <div className={`${styles["grid-4-column"]} grid-4-column`}>
                        {videoList.map(item => <VideoCard video={item} key={item._id} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export { VideoListing }