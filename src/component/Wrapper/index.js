import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ header, children }) {
  return (
    <div className={cx("wrapper")}>
      {header && <div className={cx("header")}>{header}</div>}
      {children}
    </div>
  );
}

export default Wrapper;
