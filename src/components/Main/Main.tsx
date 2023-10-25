import { FC, useState } from "react";

import styles from "./MainStyle.module.scss";
import ButtonBox from "../ButtonBox/ButtonBox";
import NewItem from "../NewItem/NewItem";
import StaticComponent from "../StaticComponent/StaticComponent";

interface CategoriesProps {
  scale: number;
  center: boolean;
}

const Categories: FC<CategoriesProps> = ({ scale, center }) => {
  const [newItems, setNewItems] = useState<JSX.Element[]>([]);

  const createNewItem = () => {
    const newElement = (
      <NewItem key={newItems.length} createNewItem={createNewItem} />
    );
    setNewItems([...newItems, newElement]);
  };

  return (
    <main
      className={styles.main}
      style={{
        transform: `scale(${scale})`,
        display: center ? "flex" : "block",
        justifyContent: center ? "center" : "flex-start",
        alignItems: center ? "center" : "flex-start",
        flexDirection: "column",
      }}
    >
      <>
        <StaticComponent>
          <ButtonBox>
            <button onClick={() => createNewItem()}>
              <span className={styles.plus}>+</span>
            </button>
          </ButtonBox>
        </StaticComponent>
        <div className={styles.container}>{newItems.map((item) => item)}</div>
      </>
    </main>
  );
};

export default Categories;
