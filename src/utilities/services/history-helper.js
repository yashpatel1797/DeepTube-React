import axios from "axios";
import { toast } from "react-toastify";
/**
 * add video in a History
 * @param {*} video object contains video details
 * @param {*} playListDispatch 
 */
const addVideoInHistory = async (video, playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.post("/api/user/history", { video }, {
            headers: { authorization: encodedToken }
        })
        if (data) {
            playListDispatch({ type: "ADD_HISTORY", payload: data.history })
        }
    } catch (error) {
    }
}

/**
 * remove video from History
 * @param {*} videoId id of specific video which needs to be removed
 * @param {*} playListDispatch 
 */
const removeVideoFromHistory = async (videoId, playListDispatch, encodedToken) => {
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
const deleteAllHistory = async (playListDispatch, encodedToken) => {
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