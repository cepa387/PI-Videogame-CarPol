import React from "react";
import style from "../Card/Card.module.css"

export default function NotFound ({image}) {
    return (
        <div>
            {image === "noimage" ?
            <img className={style.img} src="https://acortar.link/e4iUP" alt="Link caido"/>
            : <img className={style.img} src="https://acortar.link/xjEvD" alt="Link caido"/>}
        </div>
    );
};