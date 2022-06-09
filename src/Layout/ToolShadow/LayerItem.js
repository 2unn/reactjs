import classNames from "classnames/bind";
import styles from "./ToolShadow.module.scss";

import { getParent } from "../../component/Constance";
import { useRef } from "react";

const cx = classNames.bind(styles);

function LayerItem({
  value,
  getId,
  activeId,
  id,
  handleDeleteItem,
  swapItems,
}) {
  const classes = cx("layer-item", {
    active: activeId,
  });

  function handleSelect() {
    getId(id);
  }

  function handleOnclick() {
    handleDeleteItem(id)
  }


  function handleMouseDown(e) {
    let dragElement = getParent(e.target, "li");
    if (dragElement) {
      dragElement.draggable = true;
    }

  }

  function handleMouseUp(e) {
    let dragElement = getParent(e.target, "li");

    dragElement.draggable = false;
  }


  function handleDragStart(e) {
    let dragStartIndex = e.dataTransfer.setData('dataIndex',id)
    e.dataTransfer.dropEffect = 'move'
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    let preStartIndex
    if(e.dataTransfer.getData('dataIndex') > 0){
      preStartIndex = e.dataTransfer.getData('dataIndex') - 1
    }else{
      preStartIndex = 0
    }

    let dropElement = getParent(e.target, "li") || e.target;
    let dragEndIndex;
    
    if(dropElement.getAttribute('data-index') > 0){
      dragEndIndex = dropElement.getAttribute('data-index') - 1
    }else{
      dragEndIndex = 0
    }

    swapItems((prev) => {
      [prev[preStartIndex], prev[dragEndIndex]] = [prev[preStartIndex], prev[dragEndIndex]]
      return prev;
    });
  }

  return (
    <li
      onDrop={handleDrop}
      onDragOver={allowDrop}
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleSelect}
      data-index={id}
      className={classes}
    >
      <div className={cx("front")}>
        <span>
          <svg
            viewBox="0 0 20 20"
            className={cx("icon")}
            focusable="false"
            aria-hidden="true"
          >
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14m6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6m0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14"></path>
          </svg>
        </span>
        {value[id - 1]}
      </div>
      <div className={cx("back")}>
        <span>
          <svg
            viewBox="0 0 20 20"
            className={cx("icon")}
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M17.086 2.912a3.126 3.126 0 0 0-4.414 0l-9.379 9.379a.998.998 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l9.38-9.379a3.125 3.125 0 0 0 0-4.414zm-1.414 3L15 6.584l-1.586-1.586.672-.672a1.125 1.125 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586zM5.414 12.998L12 6.412l1.586 1.586L7 14.584l-1.586-1.586z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <span onClick={handleOnclick}>
          <svg
            viewBox="0 0 20 20"
            className={cx("icon")}
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  );
}

export default LayerItem;
