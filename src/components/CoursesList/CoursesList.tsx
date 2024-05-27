import { FC } from "react";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CoursesList.module.scss";
interface CoursesListProps {
  courses: Course[];
}

const CoursesList: FC<CoursesListProps> = ({ courses }) => {
  return (
    <div className={styles.courses_list}>
      {courses.map((course) => (
        <CourseCard
          name={course.name}
          image={course.image}
          bgColor={course.bgColor}
          key={course.id}
        />
      ))}
    </div>
  );
};

export default CoursesList;
