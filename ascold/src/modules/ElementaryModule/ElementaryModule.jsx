import style from "./style/index.module.css";
import { Courses } from "./components/Courses/Courses";
import { Woman } from "./components/Woman/woman";


export const Elementary = () => {
  return (
    <div className={style.elementary}>
      <div className={style.contentElementary}>
        <Courses/>
        <Woman/>
      </div>
    </div>
  );
};
