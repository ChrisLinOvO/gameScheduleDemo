import { useEffect, useState, useRef } from "react";
import "./GameBar.css";
import logo1 from '../../icon/logo1.png';
import logo2 from '../../icon/logo2.png';
import logo3 from '../../icon/logo3.png';
import logo4 from '../../icon/logo4.png';




const GameBar= ({propsMenuGame}) =>{
  const MOVE_ONCE = 340; //滾動移動一次 距離
  const [startPos, setStartPos] = useState([0, 0]); //起始移動位置
  const [scrollMover, setScrollMover] = useState(0);
  const [chooseDateCtn, setChooseDateCtn] = useState(0);
  const [menuGame, setMenuGame] = useState([]); // 日期Render GameBar
  const inputRef = useRef();
  useEffect(() => {
    clearScrollBarCtn();
    setMenuGame(propsMenuGame || []);
  }, [propsMenuGame]);

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
      //let tMoveDis = scrollMover + MOVE_ONCE * (disX > 0 ? -1 : 1);
      if (tMoveDis > 0) tMoveDis = 0; //往左最小邊界
  
      //往最右邊界
      const maxScrollBarX = (menuGame.length - 1) * (MOVE_ONCE + 20) * -1;
      if (tMoveDis < maxScrollBarX) return; //往左已到達最小邊界
  
      inputRef.current.style.left = tMoveDis + "px";
  
      // 所選到日期
      const nextCtn = chooseDateCtn + scrollDirection * -1;
      setChooseDateCtn(nextCtn < 0 ? 0 : nextCtn);
      setScrollMover(tMoveDis);
    }
  
    //scroll Elem 滾動到 第0項
    function clearScrollBarCtn() {
      inputRef.current.style.left = "0px";
      setChooseDateCtn(0);
      setScrollMover(0);
    }


    //主客場icon
    function iconStyle(item) {
       if(item==="桃園領航猿")return logo1;
       if(item==="福爾摩沙台新夢想家")return logo2;
       if(item==="新竹街口攻城獅")return logo3;
       if(item==="臺北富邦勇士")return logo4;
    }
  return (
    <div className="scroll-Outer gameDiv">
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
          {menuGame.map((item, index) => {
            return (
           
                <div className={"gameItem"} key={index+ 1}>
                  <p className="doFlex topTitle">
                    <span>{item.date}</span>
                    <span>{item.type}</span>
                  </p>
                  <p className="location">{item.location}</p>
                  <div className="gameTeam">
                    <p className="doFlex">
                      
                      <img  src={iconStyle(item.homeTeam[0])} ></img>
                      <span>{item.homeTeam[0]}</span>
                      
                      <span>{item.homeTeam[1]}</span>
                    </p>
                    <p className="doFlex">
                    <img  src={iconStyle(item.guestTeam[0])} ></img>
                      <span>{item.guestTeam[0]}</span>
                      <span>{item.guestTeam[1]}</span>
                    </p>
                  </div>
                  <button className="info">查看詳情</button>
                  <button className="buy" onClick={()=>{
                    alert(`date:${item.date}\ngameId:${item.gameId}\nguestTeam:${item.guestTeam}\nhomeTeam:${item.homeTeam}\nlocation:${item.location}\nprice:${item.price}\ntype:${item.type}\nstage:${item.stage}`)
                    console.log("item",item)}}>購票</button>
                </div>
            
            );
          })}
        </div>
      </div>
  );
}

export default GameBar;
