import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ToolShadow.module.scss";

const cx = classNames.bind(styles);

function Slider({ label, value, max, min, takeTextShadow, }) {
  let sliderWidth;
  useEffect(() => {
    takeTextShadow(value);
  }, [value]);

  if (min === "0") {
    sliderWidth = value;
  } else {
    sliderWidth = (+value + 50).toString();
  }

  function handleSliderChange(e) {
    takeTextShadow(e.target.value);
  }

  return (
    <div className={cx("slider-wrapper")}>
      <label className={cx("label")} htmlFor="range">
        {label}
      </label>
      <div className={cx("field")}>
        <input
          onChange={handleSliderChange}
          id="range"
          style={{
            background: ` linear-gradient(
                90deg,
                rgb(92, 106, 196) ${sliderWidth}%,
                rgb(196, 205, 213) ${sliderWidth}%
              )`,
          }}
          className={cx("range")}
          type="range"
          value={value}
          min={min}
          max={max}
          step="1"
        />
        <div
          style={{
            left: `${sliderWidth}%`,
            transform: `translateX(-${sliderWidth}%)`,
          }}
          className={cx("slider-value")}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default Slider;
