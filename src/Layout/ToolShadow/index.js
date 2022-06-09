import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ToolShadow.module.scss";
import {
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow,
  initShadow,
  initValue,
  changeValue,
} from "../../component/Constance";

import Wrapper from "../../component/Wrapper";
import Slider from "./Slider";
import ColorPick from "../../component/ColorPick";
import LayerItem from "./LayerItem";

const cx = classNames.bind(styles);

function ToolShadow({ shadowValues, setTextShadowStyle }) {
  const [valueSaved, setvalueSaved] = useState([initValue(1)]);
  const [currentItem, setCurrentItem] = useState(1);
  const [shiftright, setShiftright] = useState(initShiftRight);
  const [shiftdown, setShiftDown] = useState(initShiftDown);
  const [blur, setBlur] = useState(initBlur);
  const [opacity, setOpacity] = useState(initOpacity);
  const [color, setColor] = useState(initColorShadow);

  const Value = changeValue(shiftright, shiftdown, blur, opacity, color);

  useEffect(() => {
    setTextShadowStyle((prev) => {
      if (prev.length > 0) {
        prev.forEach(() => {
          prev[currentItem - 1] = Value;
        });
      }
      return [...prev];
    });
  }, [Value]);

  useEffect(() => {
    setvalueSaved((prev) => {
      if (prev.length > 0) {
        prev[currentItem - 1].shiftright = shiftright;
        prev[currentItem - 1].shiftdown = shiftdown;
        prev[currentItem - 1].blur = blur;
        prev[currentItem - 1].opacity = opacity;
        prev[currentItem - 1].color = color;
      }
      return [...prev];
    });
  }, [Value]);

  useEffect(() => {
    if (currentItem > 0) {
      if (currentItem <= valueSaved.length) {
        setShiftright(valueSaved[currentItem - 1].shiftright);
        setShiftDown(valueSaved[currentItem - 1].shiftdown);
        setBlur(valueSaved[currentItem - 1].blur);
        setOpacity(valueSaved[currentItem - 1].opacity);
        setColor(valueSaved[currentItem - 1].color);
      } else {
        setShiftright(valueSaved[valueSaved.length - 1].shiftright);
        setShiftDown(valueSaved[valueSaved.length - 1].shiftdown);
        setBlur(valueSaved[valueSaved.length - 1].blur);
        setOpacity(valueSaved[valueSaved.length - 1].opacity);
        setColor(valueSaved[valueSaved.length - 1].color);
      }
    }
  }, [currentItem]);

  function handleAddLayer() {
    setTextShadowStyle((pre) => [...pre, initShadow]);
    setvalueSaved((pre) => [...pre, initValue(valueSaved.length + 1)]);
  }

  function handleDelete(id) {
    if (shadowValues.length > 1) {
      setTextShadowStyle((pre) => {
        const newValue = pre.filter((val, i) => {
          return i !== id - 1;
        });
        return newValue;
      });
      setvalueSaved((pre) => {
        const newValue = pre.filter((val, i) => {
          return i !== id - 1;
        });
        return newValue;
      });
    }
  }

  // function handleSwapItems(startIndex, endIndex) {
  //   console.log(startIndex,endIndex)
  //   setTextShadowStyle((prev) => {
  //     [prev[startIndex], prev[endIndex]] = [prev[endIndex], prev[startIndex]]
  //     console.log(prev)
  //     return prev;
  //   });
  //   setvalueSaved((prev) => {
  //     [prev[startIndex], prev[endIndex]] = [prev[endIndex], prev[startIndex]]
  //     return prev;
  //   })
  // }

  return (
    <Wrapper header={"Text-Shadow CSS Generator"}>
      <Slider
        value={shiftright}
        takeTextShadow={setShiftright}
        max="50"
        min="-50"
        label={"Shift right"}
      />
      <Slider
        value={shiftdown}
        takeTextShadow={setShiftDown}
        max="50"
        min="-50"
        label={"Shift down"}
      />
      <Slider
        value={blur}
        takeTextShadow={setBlur}
        max="100"
        min="0"
        label={"Blur"}
      />
      <Slider
        value={opacity}
        takeTextShadow={setOpacity}
        max="100"
        min="0"
        label={"Opacity"}
      />
      <div className={cx("colorpick-wrapper")}>
        <ColorPick getColor={setColor} colorValue={color} />
      </div>
      <div className={cx("add_layer")}>
        <button onClick={handleAddLayer} className={cx("add_layer-btn")}>
          Add Layer
        </button>
        <div className={cx("layer-list")}>
          <ul>
            {shadowValues.map((el, i) => {
              return (
                <LayerItem
                  activeId={currentItem === i + 1}
                  getId={setCurrentItem}
                  swapItems={setTextShadowStyle}
                  handleDeleteItem={handleDelete}
                  key={i}
                  id={i + 1}
                  value={shadowValues}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default ToolShadow;
