import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../../Router/Routemain";
import "./LeftSideRouter.css";

export default function LeftSideRouter() {
    const location = useLocation();

    return(
        <div className="left-side">
            <NavLink className={location.pathname === "/home" ? "active-link" : "sidebar-link"} to="/home">首页</NavLink>
            <NavLink className={location.pathname === "/home/scoresearch" ? "active-link" : "sidebar-link"} to="/home/scoresearch">成绩查询</NavLink>
            <NavLink className={location.pathname === "/home/scoreview" ? "active-link" : "sidebar-link"} to="/home/scoreview">关于我们</NavLink>
        </div>
    );
}