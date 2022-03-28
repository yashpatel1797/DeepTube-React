import axios from 'axios'
/**
 * make network call and fetch videos list
 * @returns array which contains video data
 */
const getVideosDataFromVideo = async () => {
    try {
        const res = await axios.get("/api/videos")
        return res.data.videos;
    } catch {
        console.log(error);
    }
}
export { getVideosDataFromVideo }