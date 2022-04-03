import axios from "axios";
import { encodedToken } from "utilities/token";
/**
 * add video in a likes
 * @param {*} video object contains video details
 * @param {*} playListDispatch 
 */
const addVideoInLike = async (video, playListDispatch) => {
    try {
        const { data } = await axios.post("/api/user/likes", { video }, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_LIKE", payload: data.likes })
    } catch (error) {
        console.log(error);
    }
}

/**
 * remove video from like
 * @param {*} videoId id of specific video which needs to be removed
 * @param {*} playListDispatch 
 */
const removeVideoFromLike = async (videoId, playListDispatch) => {
    try {
        const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: { authorization: encodedToken }
        })
        playListDispatch({ type: "ADD_LIKE", payload: data.likes })
    } catch (error) {
        console.log(error);
    }
}
export { addVideoInLike, removeVideoFromLike }