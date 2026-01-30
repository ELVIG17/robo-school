import style from "./style/index.module.css"

export const Navigation = () => {
    return(
                <div className={style.navigation}>
                  <p>О школе</p>
                  <p>Тренеры</p>
                  <p>Стоимость</p>
                </div>
    )
}