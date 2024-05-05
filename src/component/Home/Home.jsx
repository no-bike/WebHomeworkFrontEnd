import React from "react";
import { Outlet } from "react-router-dom";
import './Home.css';
import Head from "../Head/Head";
import LeftSideRouter from "../LeftSideRouter/LeftSideRouter";


export default function Home() {
    return (
        <div className="home">
            <div className="home-title">
                <Head username={"这里需要接收后端传回的用户名"} />
            </div>
            <div className="home-sidebar">
                <LeftSideRouter />
            </div>
            <div className="home-content">
                <Outlet />
            </div>
        </div>
    )
}