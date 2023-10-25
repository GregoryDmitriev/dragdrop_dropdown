import { FC, useState } from "react";

import styles from "./NewItemStyle.module.scss";
import ButtonBox from "../ButtonBox/ButtonBox";

interface NewItemProps {
  children?: JSX.Element;
  createNewItem: () => void;
}

const NewItem: FC<NewItemProps> = ({ createNewItem }) => {
  const [inputValue, setInputValue] = useState("Categories");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputWidth = inputValue ? inputValue.length * 6.3 + "px" : "80.79px";

  return (
    <div className={styles.box_item}>
      <div className={styles.new_item}>
        <input
          className={styles.title}
          type="text"
          placeholder="Category name"
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: inputWidth }}
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
