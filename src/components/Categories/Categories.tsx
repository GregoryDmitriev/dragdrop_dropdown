import { FC } from "react";

import styles from "./CategoriesStyle.module.scss";
import ItemTodo from "../ItemTodo/ItemTodo";

interface CategoriesProps {
  scale: number;
  center: boolean;
}

const Categories: FC<CategoriesProps> = ({ scale, center }) => {
  return (
    <main className={styles.main} style={{
      transform: `scale(${scale})`,
      display: center ? 'flex' : 'block',
      justifyContent: center ? 'center' : 'flex-start',
      alignItems: center ? 'flex-start' : 'flex-start',
    }}>
      <ItemTodo />
    </main>
  );
};

export default Categories;
