import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Preview.module.scss";
import Wrapper from "../../component/Wrapper";

import ColorPick from "../../component/ColorPick";

const cx = classNames.bind(styles);

function Preview({ shadowStyle }) {
  const [textColor, setTextColor] = useState("#3d9df6");
  const [backgroundColor, setBackGroundColor] = useState("#ffffff");
  return (
    <Wrapper header={"Preview"}>
      <div className={cx("wrapper")}>
        <div className={cx("color-wrapper")}>
          <ColorPick getColor={setBackGroundColor} colorValue={backgroundColor} />
          <ColorPick getColor={setTextColor} colorValue={textColor} />
        </div>
        <div className={cx("text-wrapper")}>
          <div
            style={{
              textShadow: shadowStyle.join(","),
              zIndex: "999",
              color: textColor,
              backgroundColor: backgroundColor,
            }}
            className={cx("preview-text")}
          >
            Hello
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Preview;
