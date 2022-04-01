import { Home, VideoListing, PlayList, DetailedPlaylist } from "pages"
import MockMan from 'mockman-js';
import { ScrollToTop } from "utilities";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/videos",
        element: <VideoListing />,
    },
    {
        path: "/playList",
        element: <PlayList />,
    },
    {
        path: "/playlist/:playlistId",
        element: <DetailedPlaylist />,
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },
]

export { routes }