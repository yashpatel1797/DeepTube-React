import axios from "axios"
import { toast } from "react-toastify"

/**
 * get playlist data from server and store in playlist
 * @param {reducer function} playListDispatch 
 */
const getPlaylistData = async (playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/playlists", {
            headers: { authorization: encodedToken },
        })
        playListDispatch({ type: "ADD_PLAYLIST", payload: data.playlists })
    } catch (error) {

    }
}
/**
 * create new playlist 
 * @param {string} playListTitle title of playlist
 * @param playListDispatch reducer dispatch will add title to playlist
 */
const createPlayList = async (playListTitle, playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.post("/api/user/playlists",
            { playlist: { title: playListTitle } },
            {
                headers: { authorization: encodedToken },
            }
        )
        playListDispatch({ type: "ADD_PLAYLIST", payload: data.playlists })
        toast.success(<p>Playlist created.</p>)
    } catch (error) {
        toast.error(<p>Not able to create playlist.</p>)
    }

}
/**
 * delete playlist
 * @param {string} playlistId 
 * @param {reducer function} playListDispatch 
 * @returns playlist array
 */
const deletePlaylist = async (playListDispatch, encodedToken, playlistId) => {
    try {
        const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: { authorization: encodedToken },
        })
        playListDispatch({ type: "DELETE_PLAYLIST", payload: playlistId })
        toast.success(<p>Playlist deleted.</p>)
        return data.playlists;
    } catch (error) {
        toast.error(<p>Not able to delete playlist.</p>)
    }
}
export { createPlayList, getPlaylistData, deletePlaylist }