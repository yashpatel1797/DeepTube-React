import React, { useState, useContext, createContext, useReducer, useEffect } from "react"
import { playListReducer, playListTitleReducer } from "reducer";
import { getPlaylistData } from "utilities"

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [playListState, playListDispatch] = useReducer(playListReducer, {
        playlists: []
    })
    const [playListTitleState, playListTitleDispatch] = useReducer(playListTitleReducer, {
        allPlayListTitle: [],
        playListTitle: []
    })
    const { playlists } = playListState
    const { playListTitle, allPlayListTitle } = playListTitleState

    useEffect(() => {
        getPlaylistData(playListDispatch);
    }, [])

    return (
        <PlayListContext.Provider value={{ showModal, setShowModal, playlists, playListTitle, allPlayListTitle, playListDispatch, playListTitleDispatch }}>{children}</PlayListContext.Provider>
    )
}
const usePlayList = () => useContext(PlayListContext)

export { usePlayList, PlayListProvider }