import { Home, VideoListing, PlayList, DetailedPlaylist, WatchLater, Login, Signup, VideoPage, Like, History } from "pages"
import { PrivateRoute } from "PrivateRoute";
import MockMan from 'mockman-js';

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
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/video/:videoId",
        element: <VideoPage />,
    },
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                path: "/playList",
                element: <PlayList />,
            },
            {
                path: "/playlist/:playlistId",
                element: <DetailedPlaylist />,
            },
            {
                path: "/watchlater",
                element: <WatchLater />,
            },
            {
                path: "/like",
                element: <Like />,
            },
            {
                path: "/history",
                element: <History />,
            },
        ]
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },

]

export { routes }