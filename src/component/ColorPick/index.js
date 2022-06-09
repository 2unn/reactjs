import classNames from "classnames/bind";
import styles from "./ColorPick.module.scss";

const cx = classNames.bind(styles);

function ColorPick({ colorValue, getColor }) {
  function handleChange(e) {
    getColor(e.target.value);
  }
  return (
    <div className={cx("wrapper")}>
      <input onChange={handleChange} value={colorValue} type="color"></input>
    </div>
  );
}

export default ColorPick;
