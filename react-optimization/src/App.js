import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/DemoOutput/DemoOutput";

function App() {
  const [IsShowParagraph, setIsShowParagraph] = useState(false);

  const togleParagraph = useCallback(() => {
    setIsShowParagraph((prevState) => !prevState);
  }, []);

  console.log("App Running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput
        isShow={IsShowParagraph}
        items={useMemo(() => [5, 3, 1, 10, 9], [])}
      />
      <Button onClick={togleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
