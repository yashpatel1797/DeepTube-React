import { createContext, useContext, useReducer, useEffect } from "react";
import { getVideosDataFromVideo } from "utilities"
import { videoReducer } from "reducer";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, {
        videoList: [],
    })
    const { videoList } = videoState;
    useEffect(() => {
        (async () => {
            const data = await getVideosDataFromVideo();
            videoDispatch({ type: "VIDEO_ADD", payload: data })
        })()
    }, [])

    return (
        <VideoContext.Provider value={{ videoList, videoDispatch }}>
            {children}
        </VideoContext.Provider>

    )
}

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider }