import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.scss";

const Counter = ({ onClick, buttonIds, counterValue }) => {
  return (
    <div className={`${styles.container}`}>
      <button
        className={`${styles.button}`}
        type="button"
        id={buttonIds.subtract}
        onClick={(e) => onClick(e.target)}
      >
        -
      </button>
      <input className={`${styles.input}`} readOnly value={counterValue} />
      <button
        className={`${styles.button}`}
        type="button"
        id={buttonIds.add}
        onClick={(e) => onClick(e.target)}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  onClick: PropTypes.func,
  buttonIds: PropTypes.object,
  counterValue: PropTypes.number.isRequired,
};

export default Counter;
