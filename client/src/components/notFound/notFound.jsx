import React from "react";
import style from "../Card/Card.module.css"
import imge from "../notFound/404sonrisa.png"
import imge2 from "../notFound/Image 404 not found.png"

export default function NotFound ({image}) {
    return (
        <div>
            {image === "noimage" ?
            <img className={style.img} src={imge} alt="Link caido"/>
            : <img className={style.img} src={imge2} alt="Link caido"/>}
        </div>
    );
};