const videoReducer = (state, { type, payload }) => {
    switch (type) {
        case "VIDEO_ADD":
            return { ...state, videoList: payload }
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: payload }
        case "FILTER_BY_CATEGORY":
            return { ...state, category: payload }
        default:
            return state;
    }
}
export { videoReducer }