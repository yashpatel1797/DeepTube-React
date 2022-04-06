import { VideoPlayer } from 'components'
import { useAuth, usePlayList, useVideo } from 'context'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { isVideoInArray, removeVideoFromLike, addVideoInLike, addVideoInHistory, addVideoInWatchLater, removeVideoFromWatchLater } from "utilities"
import { PlayListModal, SideBar } from 'components'
import styles from "./VideoPage.module.css"
import classes from "styles/grid.module.css"

const VideoPage = () => {
    const { like, playListDispatch, watchLater, setShowModal, showModal } = usePlayList();
    const { isLogin } = useAuth();
    const { videoList } = useVideo();
    const { videoId } = useParams();
    const navigate = useNavigate();
    const video = videoList?.find(({ _id }) => _id === videoId)

    useEffect(() => {
        (async () => {
            addVideoInHistory(video, playListDispatch)
        })();
    }, [video, playListDispatch])
    const likeHandler = () => {
        !isLogin ? navigate("/login") :
            addVideoInLike(video, playListDispatch)
    }
    const disLikeHandler = () => {
        !isLogin ? navigate("/login") :
            removeVideoFromLike(videoId, playListDispatch)
    }
    const removeWatchListHandler = () => {
        !isLogin ? navigate("/login") :
            removeVideoFromWatchLater(video._id, playListDispatch);
    }
    const addWatchListHandler = () => {
        !isLogin ? navigate("/login") :
            addVideoInWatchLater(video, playListDispatch);
    }
    const saveToPlaylistHandler = () => {
        !isLogin ? navigate("/login") :
            setShowModal(true);
    }
    return (
        <div className={classes.grid_15_85}>
            <SideBar />
            <div className={styles.container}>
                {showModal && <PlayListModal video={video} key={video?._id} />}
                <VideoPlayer />
                <h1>{video?.title}</h1>
                <div className={styles.details}>
                    <div className={`${styles.info} text-container-desc`}>
                        <span className={styles.desc__views}>
                            {video?.views} views
                        </span>
                        <span className={styles.desc__views}>
                            {video?.uploaded} years ago
                        </span>
                    </div>
                    <div className={styles.btn_section}>
                        {isVideoInArray(videoId, like) ? (
                            <button className='btn btn-icon-center' onClick={disLikeHandler}>
                                <span className="material-icons">thumb_up</span>Liked
                            </button>
                        ) : (
                            <button className="btn btn-icon-center" onClick={likeHandler}>
                                <span className='material-icons'>thumb_up_off_alt</span>Like
                            </button>
                        )
                        }
                        {isVideoInArray(video?._id, watchLater) ?
                            (<button
                                className="btn btn-icon-center"
                                onClick={removeWatchListHandler}
                            >
                                <span className="material-icons"> watch_later </span>Remove Watch later
                            </button>
                            ) : (
                                <button
                                    className="btn btn-icon-center"
                                    onClick={addWatchListHandler}
                                >
                                    <span className="material-icons"> watch_later </span>Watch later
                                </button>
                            )
                        }
                        <button className='btn btn-icon-center' onClick={saveToPlaylistHandler}>
                            <span className='material-icons' >playlist_add</span>Save to playList
                        </button>
                    </div>
                </div>
                <div className={styles.channel_info}>
                    <img
                        className={`${styles.channel_logo} avatar-circle avatar-image-lg`}
                        src={video?.logo}
                        alt={video?.creator} />
                    <span className={styles.desc__views}>{video?.creator}</span>
                </div>
            </div>
        </div>
    )
}

export { VideoPage }