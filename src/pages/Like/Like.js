import React from 'react'
import { SideBar, VerticalVideoCard, PageInfoCard } from 'components'
import classes from "styles/grid.module.css"
import { removeVideoFromLike } from "utilities"
import { usePlayList } from 'context'

const Like = () => {
    const { like } = usePlayList();
    const image_id = like.length > 0 ? `${like[0]._id}` : "Sxjo5MySQFI";
    return (
        <div>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    <div className='grid-30-70'>
                        <PageInfoCard image_id={image_id} title="Like" />
                        <div>
                            <VerticalVideoCard
                                videos={like}
                                deleteVideoFrom={removeVideoFromLike}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Like }