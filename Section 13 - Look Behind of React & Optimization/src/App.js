import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/demo/DemoOutput";

function App() {
  const [showToggle, setShowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (showToggle) {
      setShowParagraph((prevShow) => !prevShow);
    }
  }, [showToggle]);

  const toggleBtn = () => {
    setShowToggle(true);
  };

  console.log("APP");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleBtn}>Show toggle</Button>
      {showToggle && (
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      )}
    </div>
  );
}

export default App;
