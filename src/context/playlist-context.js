import React, { useState, useContext, createContext, useReducer, useEffect } from "react"
import { playListReducer, playListTitleReducer } from "reducer";
import { getPlaylistData, getWatchLaterData } from "utilities"

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [playListState, playListDispatch] = useReducer(playListReducer, {
        playlists: [],
        watchLater: [],
        like: [],
        history: []
    })
    const [playListTitleState, playListTitleDispatch] = useReducer(playListTitleReducer, {
        allPlayListTitle: [],
        playListTitle: []
    })
    const { playlists, watchLater, like, history } = playListState
    const { playListTitle, allPlayListTitle } = playListTitleState

    useEffect(() => {
        getPlaylistData(playListDispatch);
        getWatchLaterData(playListDispatch);
    }, [])

    return (
        <PlayListContext.Provider value={{ showModal, setShowModal, playlists, watchLater, like, history, playListTitle, allPlayListTitle, playListDispatch, playListTitleDispatch }}>{children}</PlayListContext.Provider>
    )
}
const usePlayList = () => useContext(PlayListContext)

export { usePlayList, PlayListProvider }