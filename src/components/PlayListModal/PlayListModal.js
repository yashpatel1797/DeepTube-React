import { usePlayList } from 'context'
import React, { useState } from 'react'
import styles from './PlayListModal.module.css'
import { createPlayList, isVideoAlreadyInPlaylist, removeVideoFromPlaylist, addVideoInPlaylist } from "utilities"
import ReactDOM from "react-dom"

const PlayListModal = ({ video }) => {
    const [playlistInput, setPlaylistInput] = useState(false)
    const { setShowModal, playlists, playListTitle, playListDispatch, playListTitleDispatch } = usePlayList();

    const playListTitleHandler = (e) => {
        e.preventDefault();
        createPlayList(playListTitle, playListDispatch)
        setPlaylistInput(false)
    }
    const createListHandler = (e) => {
        setPlaylistInput(true)
    }
    const checkboxHandler = (e, playlistId) => {
        if (e.target.checked) {
            addVideoInPlaylist(video, playlistId, playListDispatch)
        } else {
            removeVideoFromPlaylist(video._id, playlistId, playListDispatch)
        }
    }
    return ReactDOM.createPortal(
        <div className=" modal-active modal-container">
            <div className={`${styles.dialog} dialog`}>
                <span className={`${styles.modal_header} modal-title fn-size-l`}>Save to...
                    <button className='btn btn-icon-only' onClick={() => setShowModal(false)}>
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </span>
                <ul className="list-spaced list-checkbox fn-size-m">
                    <li>
                        <label className="list-label">
                            <input type="checkbox" name="" id="" />Watch Later
                        </label>
                    </li>
                    {playlists.map(({ _id, title }) =>
                        <li key={_id}>
                            <label className="list-label">
                                <input
                                    type="checkbox"
                                    checked={isVideoAlreadyInPlaylist(playlists, _id, video._id) ?? false}
                                    id={_id}
                                    onChange={(e) => { checkboxHandler(e, _id) }}
                                />
                                {title}
                            </label>
                        </li>
                    )}
                </ul>
                {playlistInput &&
                    <form onSubmit={(e) => playListTitleHandler(e)}>
                        <input
                            className={`${styles["input-field"]} input-field`}
                            type="text" placeholder='create playlist'
                            onChange={(e) => playListTitleDispatch({ type: "NEW_PLAYLIST_TITLE", payload: e.target.value })}
                        />
                        <button className="btn" type="submit">CREATE</button>
                    </form>
                }
                <button className="btn btn-solid btn-icon-center" onClick={(e) => createListHandler(e)}>
                    <span className="material-icons">add</span>
                    <span>Creat new playlist</span>
                </button>
            </div>
        </div>, document.getElementById("modal")
    )
}

export { PlayListModal }