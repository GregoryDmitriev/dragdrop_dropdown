import { FC, useEffect, useRef } from "react";

import styles from "./MainStyle.module.scss";

const HorizontalLine: FC<{ newItems: JSX.Element[] }> = ({ newItems }) => {
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (newItems.length > 0 && firstItemRef.current && lastItemRef.current) {
      const firstItemRect = firstItemRef.current.getBoundingClientRect();
      const lastItemRect = lastItemRef.current.getBoundingClientRect();

      const horizontalLine = document.getElementById('horizontal-line');

      if (horizontalLine) {
        horizontalLine.style.top = `${firstItemRect.top + firstItemRect.height / 2}px`;
        horizontalLine.style.left = `${firstItemRect.left + firstItemRect.width / 2}px`;
        horizontalLine.style.width = `${lastItemRect.left + lastItemRect.width / 2 - firstItemRect.left - firstItemRect.width / 2}px`;
      }
    }
  }, [newItems]);

  return (
    <div id="horizontal-line" className={styles.horizontalLine} ref={lastItemRef}></div>
  );
};


export default HorizontalLine;
