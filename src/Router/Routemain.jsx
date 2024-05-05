import React from "react";
import { createHashRouter} from "react-router-dom";
import Login from "../component/Login/Login"
import Home from "../component/Home/Home"
import ScoreSearch from "../component/ScoreSearch/ScoreSearch";
import ScoreView from "../component/ScoreView/ScoreView";

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