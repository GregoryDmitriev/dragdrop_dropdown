import React, { useState, useEffect, MouseEvent } from "react";

import styles from "./DragAndDropStyle.module.scss";

interface DragAndDropProps {
  children: React.ReactNode;
}

const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [xTranslate, setXTranslate] = useState<number>(0);
  const [yTranslate, setYTranslate] = useState<number>(0);
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const onMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setInitialPosition({ x: event.clientX, y: event.clientY });
    setIsDragging(true);
  };

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        setXTranslate(xTranslate + event.clientX - initialPosition.x);
        setYTranslate(yTranslate + event.clientY - initialPosition.y);
        setInitialPosition({ x: event.clientX, y: event.clientY });
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener(
        "mousemove",
        onMouseMove as unknown as EventListener
      );
      window.addEventListener("mouseup", onMouseUp as EventListener);
    }

    return () => {
      window.removeEventListener(
        "mousemove",
        onMouseMove as unknown as EventListener
      );
      window.removeEventListener("mouseup", onMouseUp as EventListener);
    };
  }, [isDragging, initialPosition, xTranslate, yTranslate]);

  return (
    <div
      className={styles.drag_drop}
      style={{
        transform: `translate(${xTranslate}px, ${yTranslate}px)`,
      }}
      onMouseDown={onMouseDown}
    >
      {props.children}
    </div>
  );
};

export default DragAndDrop;
