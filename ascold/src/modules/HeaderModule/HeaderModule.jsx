import { Logo } from "../../components/Logo/Logo";
import { Phone } from "../../components/Phone/Phone";
import { Navigation } from "./components/Navigation/navigation";
import style from "./style/index.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.contentHeader}>
        <Logo/>
        <Navigation/>
        <Phone/>
      </div>
    </header>
  );
};
