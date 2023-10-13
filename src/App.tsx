import { FC, useState } from "react";

import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

const App: FC = () => {
  const [scale, setScale] = useState(1);
  const [center, setCenter] = useState(true);

  const handleZoomPlus = () => {
    setScale(scale + 0.1);
    console.log("+");
  };

  const handleZoomMinus = () => {
    setScale(scale - 0.1);
    console.log("-");
  };

  const handleCenterAlign = () => {
    setCenter(!center);
  };

  return (
    <>
      <Header
        handleZoomPlus={handleZoomPlus}
        handleZoomMinus={handleZoomMinus}
        handleCenterAlign={handleCenterAlign}
        setScale={setScale} 
        setScaleUpdate={setScale} //
      />
      <Categories scale={scale} center={center} />
    </>
  );
};

export default App;
