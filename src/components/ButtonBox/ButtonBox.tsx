import { FC } from "react";

import styles from './ButtonBoxStyle.module.scss'

interface ButtonBoxProps {
  children: JSX.Element;
}

const ButtonBox: FC<ButtonBoxProps> = (props) => {
  return <div className={styles.btn_box}>{props.children}</div>;
};

export default ButtonBox;
