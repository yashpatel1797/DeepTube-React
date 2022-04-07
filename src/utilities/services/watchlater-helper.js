import axios from "axios";
import { toast } from "react-toastify";

/**
 * get all wishlist data from backend
 * @param {reducer function} playListDispatch 
 */
const getWatchLaterData = async (playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.get("/api/user/watchlater", {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_WATCHLATER", payload: data.watchlater })
    } catch (error) {
    }
}

/**
 * add video in a watch later
 * @param {*} video object contains video details
 * @param {*} playListDispatch 
 */
const addVideoInWatchLater = async (video, playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.post("/api/user/watchlater", { video }, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_WATCH_LATER", payload: data.watchlater })
        toast.success(<p>Video added in watch later.</p>)
    } catch (error) {
        toast.error(<p>Not able to add video in watch later.</p>)
    }
}

/**
 * remove video from watch later
 * @param {*} videoId id of specific video which needs to be removed
 * @param {*} playListDispatch 
 */
const removeVideoFromWatchLater = async (videoId, playListDispatch, encodedToken) => {
    try {
        const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_WATCH_LATER", payload: data.watchlater })
        toast.success(<p>Video removed from watch later.</p>)
    } catch (error) {
        toast.error(<p>not able to remove video from watch later.</p>)
    }
}
export { getWatchLaterData, addVideoInWatchLater, removeVideoFromWatchLater }