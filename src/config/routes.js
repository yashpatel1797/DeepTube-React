import { Home, VideoListing, PlayList, DetailedPlaylist, Login, Signup } from "pages"
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
        ]
    },
    {
        path: "/mockMan",
        element: <MockMan />,
    },

]

export { routes }