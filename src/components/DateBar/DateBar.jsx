import { useEffect, useState, useRef } from "react";
import "./DateBar.scss";
const DateBar = ({ propsMenuDate, onDateChange }) => {
  const MOVE_ONCE = 220; //滾動移動一次 距離
  const [startPos, setStartPos] = useState([0, 0]); // 起始移動位置
  const [scrollMover, setScrollMover] = useState(0); // Element left 目前捲動數值
  const [chooseDateCtn, setChooseDateCtn] = useState(0); // 日期選到第幾項
  const [menuDate, setMenuDate] = useState([]); // 日期Render Menu
  const inputRef = useRef(); // 捲動Elem

  useEffect(() => {
    setMenuDate(propsMenuDate || []);
  }, [propsMenuDate]);

  // 日期Elem左右滾動
  function judgeScroll(endPos) {
    const disX = endPos.clientX - startPos[0]; //結束X - 起始X
    //const disY = endPos.clientY - startPos[1]; //結束Y - 起始Y
    //console.log(disX, disY);

    //--防止移動太敏感 (跳出)
    // if (Math.abs(disX) < 70 || Math.abs(disY) > 30) return;
    if (Math.abs(disX) < 50) return;

    //--此次left向 左/右 移動距離
    const scrollDirection = disX > 0 ? 1 : -1;
    let tMoveDis = scrollMover + MOVE_ONCE * scrollDirection;
    if (tMoveDis > 0) tMoveDis = 0; //往左最小邊界
    if (tMoveDis === 0 && chooseDateCtn === 0) return; //已到最左 跳出(不觸發props.onDateChange)
    //往最右邊界
    const maxScrollBarX = (menuDate.length - 1) * (MOVE_ONCE + 20) * -1;
    if (tMoveDis < maxScrollBarX) return; //往左已到達最小邊界

    inputRef.current.style.left = tMoveDis + "px";

    // 所選到日期
    const nextCtn = chooseDateCtn + scrollDirection * -1;
    onDateChange(nextCtn < 0 ? 0 : nextCtn);
    setChooseDateCtn(nextCtn < 0 ? 0 : nextCtn);
    setScrollMover(tMoveDis);
  }

  return (
    <div className="scroll-Outer">
      <div
        ref={inputRef}
        className="scroll-Mover"
        onTouchStart={(v) => {
          setStartPos([
            v.changedTouches[0].clientX,
            v.changedTouches[0].clientY
          ]);
        }}
        onTouchEnd={(v) => {
          judgeScroll(v.changedTouches[0]);
        }}
      >
        {propsMenuDate.map((item, index) => {
          return (
            <div
              className={`dateItem ${index === chooseDateCtn ? "choose" : ""}`}
              key={index + 1}
            >
              <span className="dot"></span>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DateBar;
