import { Pockets } from "./components/Pockets/Pockets";
import { TitleOfPockets } from "./components/TitleOfPocket/TitleOfPocket";
import style from "./style/index.module.css";

export const ChoiceOfPocket = () => {
  return (
    <div className={style.choiceOfPocket}>
      <div className={style.contentChoiceOfPocket}>
        <TitleOfPockets/>
        <Pockets/>
      </div>
    </div>
  );
};
