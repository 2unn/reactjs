export function hexToRgbA(hex, opacity) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      `,${+opacity / 100})`
    );
  }
  throw new Error("Bad Hex");
}

const initShiftRight = "0";
const initShiftDown = "0";
const initBlur = "5";
const initOpacity = "20";
const initColorShadow = "#000";

const changeValue = (shiftright, shiftdown, blur, opacity, color) => {
  return `${hexToRgbA(
    color,
    opacity
  )} ${shiftright}px ${shiftdown}px ${blur}px`;
};

function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.localName === selector) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}

const initValue =  {
  
    shiftright: initShiftRight,
    shiftdown: initShiftDown,
    blur: initBlur,
    opacity: initOpacity,
    color: initColorShadow,
 
};

const initShadow = changeValue(
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow
);

export {
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow,
  initShadow,
  initValue,
  changeValue,
  getParent,
};
