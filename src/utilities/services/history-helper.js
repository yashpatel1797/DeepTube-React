import axios from "axios";
import { toast } from "react-toastify";
import { encodedToken } from "utilities/token";
/**
 * add video in a History
 * @param {*} video object contains video details
 * @param {*} playListDispatch 
 */
const addVideoInHistory = async (video, playListDispatch) => {
    try {
        const { data } = await axios.post("/api/user/history", { video }, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_HISTORY", payload: data.history })
    } catch (error) {
        console.log(error);
    }
}

/**
 * remove video from History
 * @param {*} videoId id of specific video which needs to be removed
 * @param {*} playListDispatch 
 */
const removeVideoFromHistory = async (videoId, playListDispatch) => {
    try {
        const { data } = await axios.delete(`/api/user/history/${videoId}`, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_HISTORY", payload: data.history })
        toast.success(<p>Video removed from history.</p>)
    } catch (error) {
        toast.error(<p>Video not removed from history.</p>)
    }
}
/**
 * will clear all history
 * @param {reducer function} playListDispatch 
 */
const deleteAllHistory = async (playListDispatch) => {
    try {
        const { data } = await axios.delete("/api/user/history/all", {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_HISTORY", payload: data.history })
        toast.success(<p>All Video removed from history.</p>)
    } catch (error) {
        toast.error(<p>All Video not removed from history.</p>)
    }
}
export { addVideoInHistory, removeVideoFromHistory, deleteAllHistory }