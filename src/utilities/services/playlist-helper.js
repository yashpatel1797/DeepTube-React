import axios from "axios"
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
    } catch (error) {
        console.log(error);
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

    } catch (error) {
        console.log(error);
    }
}

export { addVideoInPlaylist, removeVideoFromPlaylist }