import React from 'react'
import { SideBar, VerticalVideoCard, PageInfoCard, EmptyData } from 'components'
import classes from "styles/grid.module.css"
import { removeVideoFromHistory, deleteAllHistory } from "utilities"
import { usePlayList } from 'context'

const History = () => {
    const { history } = usePlayList();
    const image_id = history.length > 0 ? `${history[0]._id}` : "Sxjo5MySQFI";

    return (
        <div>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    {history.length <= 0 ? <EmptyData /> :
                        <div className='grid-30-70'>
                            <PageInfoCard image_id={image_id} title="History" deleteButton={deleteAllHistory} />
                            <div>
                                <VerticalVideoCard
                                    videos={history}
                                    deleteVideoFrom={removeVideoFromHistory}
                                />
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export { History }