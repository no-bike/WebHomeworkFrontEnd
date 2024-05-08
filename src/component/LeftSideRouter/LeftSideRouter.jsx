import React from "react";
import { Link } from "react-router-dom";

import "../../Router/Routemain";
import "./LeftSideRouter.css";

export default function LeftSideRouter() {
    return(
        <div className="left-side">
            <Link className="sidebar-link" to="/home/scoresearch">成绩查询</Link>
            <Link className="sidebar-link" to="/home/scoreview">关于我们</Link>
        </div>
    );

}