import style from "./style/index.module.css"
import woman from "../../../../assets/woman.svg"

export const Woman = () => {
    return(
                <img src={woman} className={style.img}></img>
    )
}