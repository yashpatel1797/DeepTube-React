import React from 'react'
import { usePlayList } from 'context'
import { SideBar, VerticalVideoCard, PageInfoCard, EmptyData } from 'components'
import { removeVideoFromWatchLater } from "utilities"
import classes from "styles/grid.module.css"

const WatchLater = () => {
    const { watchLater } = usePlayList();
    const image_id = watchLater.length > 0 ? `${watchLater[0]._id}` : "Sxjo5MySQFI";
    return (
        <>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    {watchLater.length <= 0 ? <EmptyData /> :
                        <div className='grid-30-70'>
                            <PageInfoCard image_id={image_id} title="watchlater" />
                            <div>
                                <VerticalVideoCard
                                    videos={watchLater}
                                    // urlId={watchLaterId}
                                    // deleteDispatch={playListDispatch}
                                    deleteVideoFrom={removeVideoFromWatchLater}
                                />
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

export { WatchLater }