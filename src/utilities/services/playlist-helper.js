import axios from "axios"
import { encodedToken } from "utilities/token"

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
const removeVideoFromPlaylist = async (videoId, playlistId, playListDispatch) => {
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