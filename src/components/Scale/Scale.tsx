import { FC } from "react";

import styles from "./ScaleStyle.module.scss";

interface ScaleProps {
  valueScale: string;
  setIndexStep: (scale: number) => void;
  handleScaleStep: () => void;
}

const Scale: FC<ScaleProps> = ({ valueScale, handleScaleStep }) => {
  const openModal = () => {
    handleScaleStep();
  };

  return <button className={styles.percentage} onClick={openModal}>{valueScale}</button>;
};

export default Scale;
