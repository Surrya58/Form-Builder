import { useState } from "react";

import { LeftPane } from "./components/LeftPane";
import { RightPane } from "./components/RightPane";

import { INPUT_KEYS } from "./constant";

function App() {
  const [elements, setElements] = useState([]);

  const onAction = ({ type }) => {
    switch (type) {
      case "label": {
        const curValue = window.prompt("input label value");
        setElements((elements) => [
          ...elements,
          {
            type: INPUT_KEYS.LABEL,
            label: curValue,
          },
        ]);
        break;
      }
      case "input": {
        const curValue = window.prompt("input label value for an input");

        setElements((elements) => [
          ...elements,
          {
            type: INPUT_KEYS.INPUT,
            label: curValue,
          },
        ]);
        break;
      }
      case "list": {
        const curValue = window.prompt(
          "input comma separated string for menu options"
        );
        setElements((elements) => [
          ...elements,
          {
            type: INPUT_KEYS.LIST,
            label: curValue,
          },
        ]);
        
        break;
      }
      case "button": {
        const curValue = window.prompt("input label for button");

        setElements((elements) => [
          ...elements,
          {
            type: INPUT_KEYS.BUTTON,
            label: curValue,
          },
        ]);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <LeftPane onAction={onAction} />
        <RightPane elements={elements} />
      </div>
    </div>
  );
}

export default App;
