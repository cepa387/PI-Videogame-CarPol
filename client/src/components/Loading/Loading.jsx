import React from "react";
import style from "./Loading.module.css";
import loaderImage from './Load.gif';

export default function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <img className={style.loading} src={loaderImage} alt="Loading" />
        </div>
    );
};