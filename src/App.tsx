import { FC, useState } from "react";

import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

const App: FC = () => {
  const [scale, setScale] = useState(1);
  const [center, setCenter] = useState(true);
  const [indexStep, setIndexStep] = useState(100);

  const scaleStep = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];

  const currentIndex = scaleStep.indexOf(indexStep);

  const handleZoomPlus = () => {
    if (currentIndex < scaleStep.length - 1) {
      const nextScaleStep = scaleStep[currentIndex + 1];
      setIndexStep(nextScaleStep);
      setScale(nextScaleStep / 100);
    }
  };

  const handleZoomMinus = () => {
    if (currentIndex > 0) {
      const prevScaleStep = scaleStep[currentIndex - 1];
      setIndexStep(prevScaleStep);
      setScale(prevScaleStep / 100);
    }
  };

  const handleCenterAlign = () => {
    setCenter(true);
  };

  return (
    <>
      <Header
        step={indexStep}
        scaleStep={scaleStep}
        setIndexStep={setIndexStep}
        setScale={setScale}
        setScaleUpdate={setScale}
        handleZoomPlus={handleZoomPlus}
        handleZoomMinus={handleZoomMinus}
        handleCenterAlign={handleCenterAlign}
      />
      <Categories scale={scale} center={center} />
    </>
  );
};

export default App;
