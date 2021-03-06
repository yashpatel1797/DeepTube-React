import { SideBar, VerticalVideoCard, PageInfoCard, EmptyData } from 'components'
import { usePlayList } from 'context'
import { useParams } from "react-router-dom"
import React from 'react'
import classes from "styles/grid.module.css"
import { removeVideoFromPlaylist, deletePlaylist } from "utilities"

const DetailedPlaylist = () => {
    const { playlists } = usePlayList();
    const { playlistId } = useParams();
    const data = playlists.find((item) => item._id === playlistId)
    const videos = data?.videos;
    const image_id = videos?.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI";

    return (
        <>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    {videos?.length <= 0 ? <EmptyData /> :
                        <div className='grid-30-70'>
                            <PageInfoCard image_id={image_id} title={data?.title} deleteButton={deletePlaylist} />
                            <div>
                                <VerticalVideoCard
                                    videos={videos}
                                    deleteVideoFrom={removeVideoFromPlaylist}
                                />
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

export { DetailedPlaylist }