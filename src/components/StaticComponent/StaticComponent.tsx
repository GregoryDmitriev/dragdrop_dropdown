import { FC } from "react";

import styles from "./StaticComponentStyle.module.scss";

interface StaticComponentProps {
  children?: JSX.Element;
}

const StaticComponent: FC<StaticComponentProps> = (props) => {
  return (
    <div className={styles.static_box}>
      <div className={styles.title}>Categories</div>
      {props.children}
    </div>
  );
};

export default StaticComponent;
