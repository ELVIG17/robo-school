import { MainDescription } from "./components/MainDescription/MainDescription";
import { Numbers } from "./components/Numbers/Numbers";
import style from "./style/index.module.css";

export const Description = () => {
  return (
    <div className={style.discription}>
      <div className={style.contentDiscription}>
        <MainDescription/>
        <Numbers/>
      </div>
    </div>
  );
};
