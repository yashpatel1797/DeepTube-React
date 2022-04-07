import React, { useState, useContext, createContext, useReducer, useEffect } from "react"
import { playListReducer, playListTitleReducer } from "reducer";
import { getPlaylistData, getWatchLaterData } from "utilities"
import { useAuth } from "./authentication-context";

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {
    const { token } = useAuth();
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
        getPlaylistData(playListDispatch, token);
        getWatchLaterData(playListDispatch, token);
    }, [])

    return (
        <PlayListContext.Provider value={{ showModal, setShowModal, playlists, watchLater, like, history, playListTitle, allPlayListTitle, playListDispatch, playListTitleDispatch }}>{children}</PlayListContext.Provider>
    )
}
const usePlayList = () => useContext(PlayListContext)

export { usePlayList, PlayListProvider }