import { FC } from "react";
import styles from "./CourseCard.module.scss";
interface CourseCardProps {
  name: string;
  image: string;
  bgColor: string;
}

const CourseCard: FC<CourseCardProps> = ({ name, image, bgColor }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__image} style={{ backgroundColor: bgColor }}>
        <img src={image} width={144} height={144} />
      </div>
      <div className={styles.card__content}>
        <span className={styles.card__name}>{name}</span>
      </div>
    </article>
  );
};

export default CourseCard;
