import classNames from "classnames/bind";
import styles from "./CssView.module.scss";

import Wrapper from "../../component/Wrapper";

const cx = classNames.bind(styles);
function CssView({ value }) {
  return (
    <Wrapper header={"Css code"}>
      <div className={cx("wrapper")}>text-shadow: {value.join(",")};</div>
    </Wrapper>
  );
}

export default CssView;
