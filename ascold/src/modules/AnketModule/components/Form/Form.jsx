import style from "./style/index.module.css"

export const Form = () =>{
    return(
        <form className={style.form}>
          <div className={style.field}>
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className={style.field}>
            <input type="tel" placeholder="Number" name="Phone" required />
          </div>
          <div className={style.field}>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <button className={style.submitButton} type="submit">
            {" "}
            Оставить заявку
          </button>
        </form>
    )
}