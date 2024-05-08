import React from "react";
import { createHashRouter} from "react-router-dom";
import Login from "../component/Login/Login"
import Home from "../component/Home/Home"
import ScoreSearch from "../component/ScoreSearch/ScoreSearch";
import ScoreView from "../component/ScoreView/ScoreView";
import FirstPage from "../component/FirstPage/FirstPage";

const Routemain = createHashRouter([
    {
        path:"/",
        element: <Login />,
    },
    {
        path:"/home",
        element: <Home />,
        children:[
            {
                path:"",
                element: <FirstPage />,
            },
            {
                path:"scoresearch",
                element: <ScoreSearch />,
            },
            {
                path:"scoreview",
                element: <ScoreView />,
            }
        ],
    },

]);

export default Routemain;