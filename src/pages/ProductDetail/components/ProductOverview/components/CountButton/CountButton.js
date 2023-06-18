import classNames from "classnames/bind";
import style from "./CountButton.module.scss";
import { useState } from "react";

const cx = classNames.bind(style);

function CountButton() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={cx("container")}>
      <div className={cx("count-btn")}>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}

export default CountButton;
