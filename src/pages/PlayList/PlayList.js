import React from 'react'
import { SideBar, PlayListCard, EmptyData } from 'components'
import styles from "./PlayList.module.css"
import classes from "styles/grid.module.css"
import { usePlayList } from 'context'

const PlayList = () => {
    const { playlists } = usePlayList();
    return (
        <>
            <div className="filter-products">
                <div className={classes.grid_15_85}>
                    <SideBar />
                    {playlists.length <= 0 ? <EmptyData /> :
                        <div className={`${styles["grid-4-column"]} grid-4-column`}>
                            {playlists.map(playlist => <PlayListCard playlist={playlist} key={playlist._id} />)}
                        </div>}
                </div>
            </div>
        </>
    )
}

export { PlayList }