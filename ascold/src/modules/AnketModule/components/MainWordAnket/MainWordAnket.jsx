import style from "./style/index.module.css"

export const MainWordAnket = () =>{
    return(
                <div className={style.leftBlock}>
                  <h1 className={style.sale}>Запишитесь на курс со скидкой 10%</h1>
                  <p className={style.promotion}>
                    Акция действительна до 10 марта 2022 года
                  </p>
                </div>
    )
}