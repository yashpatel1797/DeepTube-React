import { Home, VideoListing, PlayList, DetailedPlaylist, WatchLater, Login, Signup, VideoPage, Like, History, Profile } from "pages"
import { PrivateRoute } from "PrivateRoute";
import { Error } from "components"
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
                path: "/profile",
                element: <Profile />,
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
        path: "*",
        element: <Error />,
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },

]

export { routes }