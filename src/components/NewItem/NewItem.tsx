import { FC, useState, useRef } from "react";

import ButtonBox from "../ButtonBox/ButtonBox";
import styles from "./NewItemStyle.module.scss";

interface NewItemProps {
  children?: JSX.Element;
  createNewItem: () => void;
  showVerticalLine: boolean;
}

const NewItem: FC<NewItemProps> = ({ createNewItem }) => {
  const [inputValue, setInputValue] = useState("");
  

  const newElementRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.box_item}>
      <div className={styles.new_item} ref={newElementRef}>
        <input
          className={styles.title}
          type="text"
          autoFocus={true}
          placeholder="Category name"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <ButtonBox>
        <>
          <span className={styles.clear}>✖</span>
          <span className={styles.add}>✓</span>
        </>

        {/* <button onClick={() => createNewItem()}>
          <p className={styles.plus}></p>
        </button> */}
      </ButtonBox>
    </div>
  );
};
export default NewItem;
