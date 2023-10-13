import { FC } from "react";

import styles from "./ScaleStyle.module.scss";

interface ModalProps {
  children: JSX.Element;
}

const Modal: FC<ModalProps> = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

export default Modal;
