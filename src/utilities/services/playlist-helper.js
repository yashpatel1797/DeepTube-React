import axios from "axios"
import { toast } from "react-toastify"
import { encodedToken } from "utilities/token"

/**
 * add video in a specific playlist
 * @param {object} video object contains video details
 * @param {string} playlistId 
 * @param {reducer function} playListDispatch 
 */
const addVideoInPlaylist = async (video, playlistId, playListDispatch) => {
    try {
        const data = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        }, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: { video, playlistId } })
        toast.success(<p>Video added in playlist.</p>)
    } catch (error) {
        toast.error(<p>Video not added in playlist.</p>)
    }
}
/**
 * add video from a specific playlist
 * @param {object} videoId object contains video details
 * @param {reducer function} playListDispatch 
 * @param {string} playlistId 
 */
const removeVideoFromPlaylist = async (videoId, playListDispatch, playlistId) => {
    try {
        const data = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST", payload: { videoId, playlistId } })
        toast.success(<p>Video removed from playlist.</p>)
    } catch (error) {
        toast.error(<p>Video not removed from playlist.</p>)
    }
}

export { addVideoInPlaylist, removeVideoFromPlaylist }