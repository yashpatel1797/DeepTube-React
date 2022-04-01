import { SideBar, VerticalVideoCard, PageInfoCard } from 'components'
import { usePlayList } from 'context'
import { useParams } from "react-router-dom"
import React from 'react'
import classes from "styles/grid.module.css"
import { removeVideoFromPlaylist } from "utilities"

const DetailedPlaylist = () => {
    const { playlists, playListDispatch } = usePlayList();
    const { playlistId } = useParams();
    const data = playlists.find((item) => item._id === playlistId)
    const videos = data.videos;
    return (
        <>
            <div className='spacer-3rem'></div>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    <div className='grid-30-70'>
                        <PageInfoCard />
                        <div>
                            <VerticalVideoCard
                                videos={videos}
                                urlId={playlistId}
                                deleteDispatch={playListDispatch}
                                deleteVideoFrom={removeVideoFromPlaylist}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { DetailedPlaylist }