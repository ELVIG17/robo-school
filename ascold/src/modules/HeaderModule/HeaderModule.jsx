import { Phone } from "../../components/Phone/Phone";
import style from "./style/index.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.contentHeader}>
        <h1 className={style.bigNameLeftHeader}>ROBO.SCHOOL</h1>
        <div className={style.menuInHeader}>
          <p>О школе</p>
          <p>Тренеры</p>
          <p>Стоимость</p>
        </div>
        <Phone/>
      </div>
    </header>
  );
};
