import style from "./style/index.module.css";
import image from "../../assets/trener.svg";
import { TitleOfTreners } from "./components/TitleOfTreners/TitleOfTreners";
import { ScrollingTreners } from "./components/ScrollingTreners/ScrollingTreners";

export const Treners = () => {
  return (
    //ЗАМЕНИТЬ КАРТИНКИ НА НУЖНЫЕ
    <div className={style.treners}>
      <div className={style.contentTreners}>
        <TitleOfTreners/>
        <ScrollingTreners/>
      </div>
    </div>
  );
};
