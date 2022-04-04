import axios from "axios"
import { toast } from "react-toastify"
import { encodedToken } from "utilities"

/**
 * get playlist data from server and store in playlist
 * @param {reducer function} playListDispatch 
 */
const getPlaylistData = async (playListDispatch) => {
    try {
        const { data } = await axios.get("/api/user/playlists", {
            headers: { authorization: encodedToken },
        })
        playListDispatch({ type: "ADD_PLAYLIST", payload: data.playlists })
    } catch (error) {
        console.log(error);
    }
}
/**
 * create new playlist 
 * @param {string} playListTitle title of playlist
 * @param playListDispatch reducer dispatch will add title to playlist
 */
const createPlayList = async (playListTitle, playListDispatch) => {
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
const deletePlaylist = async (playListDispatch, playlistId) => {
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