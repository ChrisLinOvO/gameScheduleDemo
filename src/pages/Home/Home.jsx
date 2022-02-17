import { useEffect, useState } from "react";
import { menuConfig } from "../../menuConfig";
import DateBar from "../../components/DateBar";
import GameBar from "../../components/GameBar";
import "./Home.scss";
const Home = () => {
  const [menuDate, setMenuDate] = useState([]);
  const [menuGame, setMenuGame] = useState([]);
  const [chooseDate, setChooseDate] = useState(0);

  useEffect(() => {
    getMenuDate();
  }, []);

  useEffect(() => {
    //日期改 > menu賽程變
    setMenuGame([...menuConfig[chooseDate].schedule]);
  }, [chooseDate]);

  const getMenuDate = () => {
    //取得菜單日期
    return setMenuDate(menuConfig.map((e) => e.date));
  };

  //props DateBar改 日期
  function changeDate(value) {
    //console.log("Page", value);
    //選擇日期改變
    setChooseDate(value);
  }

  return (
    <div className="home">
      <div className="headerBox">
      <div className="allow">＜</div>
      <div className="header">新竹街口攻城獅</div>
      <div className="title">賽程表</div>
      <div className="text">聯盟戰況</div>
      </div>
    

      <DateBar propsMenuDate={menuDate} onDateChange={changeDate} />
      <GameBar propsMenuGame={menuGame} />
    </div>
  );
};

export default Home;
