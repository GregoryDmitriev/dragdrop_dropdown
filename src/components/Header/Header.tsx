import { FC, useState } from "react";

import Scale from "../Scale/Scale";
import Modal from "../Scale/Modal";
import styles from "./HeaderStyle.module.scss";

interface HeaderProps {
  step: number;
  handleZoomPlus: () => void;
  handleZoomMinus: () => void;
  handleCenterAlign: () => void;
  setScale: (scale: number) => void;
  setIndexStep: (scale: number) => void;
  setScaleUpdate: (scale: number) => void;
  scaleStep: number[];
}

const Header: FC<HeaderProps> = ({
  step,
  scaleStep,
  handleZoomPlus,
  handleZoomMinus,
  handleCenterAlign,
  setScale,
  setIndexStep,
}) => {
  const [open, setOpen] = useState(false);
  const [openHeader, setOpenHeader] = useState(true);

  

  const handleScaleStep = () => {
    setOpen(!open);
  };

  const selectScaleUpdate = (step: number) => {
    setScale(step/100)
    setIndexStep(step);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${openHeader ? styles.open : styles.hide}`}
      >
        <div className={`${styles.services} ${openHeader ? "" : styles.hide}`}>
          Services<span>0</span>
        </div>
        <div className={`${styles.settings} ${openHeader ? "" : styles.hide}`}>
          <button className={styles.view}>LIST VIEW</button>
          <button className={styles.center} onClick={handleCenterAlign}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8S32.7 256 48 256h176v176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
            </svg>
          </button>
          <div className={styles.scale}>
            <button className={styles.minus} onClick={handleZoomMinus}>
              <svg
                className={styles.svg_minus}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                viewBox="0 0 35 35"
              >
                <path d="M33.5 18.75h-32a1.25 1.25 0 0 1 0-2.5h32a1.25 1.25 0 0 1 0 2.5Z" />
              </svg>
            </button>

            <Scale
              valueScale={`${step}%`}
              handleScaleStep={handleScaleStep}
              setIndexStep={setIndexStep}
            />

            {open && (
              <Modal>
                <ul className={styles.modal}>
                  {scaleStep.map((step) => {
                    return (
                      <li key={step} onClick={() => selectScaleUpdate(step)}>
                        {step}
                      </li>
                    );
                  })}
                </ul>
              </Modal>
            )}

            <button className={styles.plus} onClick={handleZoomPlus}>
              <svg
                className={styles.svg_plus}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M381 236H276V131c0-11-9-20-20-20s-20 9-20 20v105H131c-11 0-20 9-20 20s9 20 20 20h105v105c0 11 9 20 20 20s20-9 20-20V276h105c11 0 20-9 20-20s-9-20-20-20z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <button
        className={styles.btnHeader}
        onClick={() => setOpenHeader(!openHeader)}
      >
        {openHeader ? (
          <i className={styles.arrowUp}></i>
        ) : (
          <i className={styles.arrowDown}></i>
        )}
      </button>
    </div>
  );
};

export default Header;


