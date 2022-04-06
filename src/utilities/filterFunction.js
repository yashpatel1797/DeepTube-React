const filterFunction = (videosData, searchQuery, category) => {
    let videos = videosData;

    if (searchQuery) {
        videos = videos.filter(item =>
            item.title.toLowerCase().includes(searchQuery)
        );
    }
    if (category !== "All") {
        videos = videos.filter(item => item.categoryName === category)
    }
    return videos;
}

export { filterFunction }