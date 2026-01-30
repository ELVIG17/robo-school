import { Logo } from "../../components/Logo/Logo";
import { Phone } from "../../components/Phone/Phone";
import style from "./style/index.module.css";


export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contentFooter}>
        <div className={style.leftBlock}>
          <Logo/>
          <p className={style.mail}>© ROBO.SCHOOL</p>
        </div>
        <Phone/>
      </div>
    </div>
  );
};
