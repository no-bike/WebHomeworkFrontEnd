import React from "react";
import { Link } from "react-router-dom";

import "../../Router/Routemain";
import "./LeftSideRouter.css";

export default function LeftSideRouter() {
    return(
        <div className="left-side">
            <Link to="/home/scoresearch">成绩查询</Link>
            <Link to="/home/scoreview">成绩查看</Link>
        </div>
    );

}