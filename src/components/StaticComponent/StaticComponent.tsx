import { FC } from "react";

import styles from "./StaticComponentStyle.module.scss";

interface StaticComponentProps {
  children?: JSX.Element;
}

const StaticComponent: FC<StaticComponentProps> = (props) => {
  return (
    <div className={styles.static_box}>
      <p className={styles.title}>Categories</p>
      {props.children}
    </div>
  );
};

export default StaticComponent;
