import { Form } from "./components/Form/Form";
import { MainWordAnket } from "./components/MainWordAnket/MainWordAnket";
import style from "./style/index.module.css";

export const Anket = () => {
  return (
    <div className={style.anket}>
      <div className={style.contentAnket}>
        <MainWordAnket/>
        <Form/>
      </div>
    </div>
  );
};
