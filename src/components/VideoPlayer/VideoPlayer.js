import React from 'react'
import { useParams } from "react-router-dom"
const VideoPlayer = () => {
    const { videoId } = useParams();
    return (
        <div>
            <iframe
                width="900"
                height="506"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    )
}
export { VideoPlayer }