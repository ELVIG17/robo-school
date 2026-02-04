// TrainerCard.jsx
import style from "./style/index.module.css";
import defaultImage from "../../../../assets/trener.svg";

export const TrainerCard = ({ trainer }) => {
    return (
        <div className={style.cards}>
            <img 
                className={style.imageOfTrener} 
                src={trainer.image_url || defaultImage} 
                alt={trainer.name}
                onError={(e) => {
                    e.target.src = defaultImage; // Если изображение не загрузилось, показываем дефолтное
                }}
            />
            <h2 className={style.nameOfTrener}>{trainer.name}</h2>
            <p className={style.post}>{trainer.position}</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
        </div>
    );
};