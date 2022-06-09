import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import CssView from "./Layout/CssView";
import { initShadow } from "./component/Constance";

import Preview from "./Layout/Preview";
import Templates from "./Layout/Templates";
import ToolShadow from "./Layout/ToolShadow";

const cx = classNames.bind(styles);

function App() {
  const [textShadowStyles, setTextShadowStyle] = useState([initShadow]);
 
  return (
    <div className={cx("wrapper")}>
      <ToolShadow shadowValues={textShadowStyles} setTextShadowStyle={setTextShadowStyle} />
      <div>
        <Preview shadowStyle={textShadowStyles} />
        <CssView value={textShadowStyles} />
        <Templates />
      </div>
    </div>
  );
}

export default App;
