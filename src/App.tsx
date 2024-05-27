import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CoursesList from "./components/CoursesList/CoursesList";
import "./App.scss";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [staticCourses, setStaticCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://logiclike.com/docs/courses.json");
        const data = await response.json();
        setCourses(data);
        setStaticCourses(data);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchCourses();
  }, []);

  const sidebarTags = useMemo(() => {
    const allTags: Set<string> = new Set();

    staticCourses?.forEach((course) => {
      course.tags?.forEach((tag) => {
        allTags.add(tag);
      });
    });

    return Array.from(allTags);
  }, [staticCourses]);

  const filterCourses = (tag: string) => {
    if (tag === "All") {
      setCourses(staticCourses);
    } else {
      setCourses(staticCourses.filter((course) => course.tags?.includes(tag)));
    }
  };

  return (
    <div className="container">
      <Sidebar tags={sidebarTags} onfilterCourses={filterCourses} />
      <main className="main">
        <CoursesList courses={courses} />
      </main>
    </div>
  );
}

export default App;
