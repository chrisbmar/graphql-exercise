import React from "react";
import { useSelector } from "react-redux";
import Counter from "../../components/Counter";
import "../../styles/main.scss";

const BUTTON_IDS = {
  add: "ADD",
  subtract: "SUBTRACT",
};

const App = () => {
  const counterValue = useSelector((state) => state.counter);

  const onButtonClick = ({ id }) => {
    console.log(id);
  };

  return (
    <Counter
      counterValue={counterValue}
      buttonIds={BUTTON_IDS}
      onClick={onButtonClick}
    />
  );
};

export default App;
