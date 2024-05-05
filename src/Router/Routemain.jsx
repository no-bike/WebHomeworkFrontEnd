import React from "react";
import { createHashRouter} from "react-router-dom";
import Login from "../component/Login/Login"
import Home from "../component/Home/Home"

const Routemain = createHashRouter([
    {
        path:"/",
        element: <Login />,
    },
    {
        path:"/home",
        element: <Home />,
    },

]);

export default Routemain;