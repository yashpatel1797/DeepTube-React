const videoReducer = (state, { type, payload }) => {
    switch (type) {
        case "VIDEO_ADD":
            return { ...state, videoList: payload }

        default:
            return state;
    }
}
export { videoReducer }