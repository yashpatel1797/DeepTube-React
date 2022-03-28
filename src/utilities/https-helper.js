import axios from 'axios'
/**
 * 
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