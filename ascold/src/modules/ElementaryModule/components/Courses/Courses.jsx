import style from "./style/index.module.css"

export const Courses = () => {
    return(
                <div className={style.courses}>
                    <h1 className={style.mainNameInElementary}>ROBO SCHOOL</h1>
                    <p className={style.smallDescription}>Курсы повышения квалификации по робототехнике для педагогов начальнойшколы</p>
                    <button className={style.buttomInElementary}>Записаться на курс</button>
                </div>
    )
}