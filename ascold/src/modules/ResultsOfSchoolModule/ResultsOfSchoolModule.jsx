import { BlocksOfResult } from "./components/BlocksOfResult/BlocksOfResult";
import { TitleOfResult } from "./components/TitleOfResult/TitleOfResult";
import style from "./style/index.module.css";

export const ResultOfSchool = () => {
  return (
    <div className={style.resultOfSchool}>
      <div className={style.contentResultOfSchool}>
        <TitleOfResult/>
        <BlocksOfResult/>
      </div>
    </div>
  );
};
