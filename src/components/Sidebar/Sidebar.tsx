import { FC, memo, useState } from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  tags: string[];
  onfilterCourses: (tag: string) => void;
}

const Sidebar: FC<SidebarProps> = memo(({ tags, onfilterCourses }) => {
  const [activeTag, setActiveTag] = useState<string>("All");

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__list}>
        <button
          className={[
            styles.sidebar__item,
            activeTag === "All" && styles.sidebar__item_active,
          ].join(" ")}
          onClick={() => {
            setActiveTag("All");
            onfilterCourses("All");
          }}
        >
          Все темы
        </button>

        {tags.map((tag) => (
          <button
            className={[
              styles.sidebar__item,
              activeTag === tag && styles.sidebar__item_active,
            ].join(" ")}
            key={tag}
            onClick={() => {
              setActiveTag(tag);
              onfilterCourses(tag);
            }}
          >
            {tag}
          </button>
        ))}
      </nav>
    </div>
  );
});

export default Sidebar;
