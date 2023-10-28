import { FC, useRef, useState } from "react";

import ButtonBox from "../ButtonBox/ButtonBox";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import NewItem from "../NewItem/NewItem";
import StaticComponent from "../StaticComponent/StaticComponent";
import HorizontalLine from "./HorizontalLine";
import styles from "./MainStyle.module.scss";

interface MainProps {
  scale: number;
  center: boolean;
}

const Main: FC<MainProps> = ({ scale, center }) => {
  const [newItems, setNewItems] = useState<JSX.Element[]>([]);
  const [showVerticalLine, setShowVerticalLine] = useState(false);

  const createNewItem = () => {
    const newElement = (
      <NewItem
        key={newItems.length}
        createNewItem={createNewItem}
        showVerticalLine={newItems.length > 0}
      />
    );
    setNewItems((newItems) => [...newItems, newElement]);
    if (newItems.length > 1) {
      setShowVerticalLine(true);
    }
  };

  const styleMain = {
    transform: `scale(${scale})`,
    display: center ? "flex" : "block",
    justifyContent: center ? "center" : "flex-start",
    alignItems: center ? "center" : "flex-start",
  };

  return (
    <main className={styles.main} style={styleMain}>
      <DragAndDrop>
        <StaticComponent>
          <ButtonBox>
            <button onClick={() => createNewItem()}>
              <span className={styles.plus}>+</span>
            </button>
          </ButtonBox>
        </StaticComponent>
        <div className={styles.container}>
          {showVerticalLine && <div className={styles.verticalLine}></div>}
          {newItems.length > 1 && <HorizontalLine newItems={newItems} />}
          {newItems.map((item) => item)}
        </div>
      </DragAndDrop>
    </main>
  );
};

export default Main;
