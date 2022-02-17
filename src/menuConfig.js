const menuConfig = [
  {
    id:1,
    date: "2022年1月",
    schedule: [
      {
        date: "1月29日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 112],
        guestTeam: ["臺北富邦勇士", 105],
        stage: "over",//比賽是否結束 ready=未開使 ing=進行中
        gameId: "P20220129-1",//賽事ID
        price:300
      },
      {
        date: "1月30日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 110],
        guestTeam: ["福爾摩沙台新夢想家", 109],
        stage: "over",
        gameId: "P20220130-2",
        price:300
      }
    ]
  },
  {
    id:2,
    date: "2022年2月",
    schedule: [
      {
        date: "2月19日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 72],
        guestTeam: ["臺北富邦勇士", 65],
        stage: "ing",
        gameId: "P20220219-1",
        price:300
      },
      {
        date: "2月20日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220220-2",
        price:300
      },
      {
        date: "2月26日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["臺北富邦勇士", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220226-3",
        price:300
      },
      {
        date: "2月27日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220227-4", 
        price:300
      }
    ]
  },
  {
    id:3,
    date: "2022年3月",
    schedule: [
      {
        date: "3月5日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220305-1",
        price:300
      },
      {
        date: "3月6日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220306-2",
        price:300
      },
      {
        date: "3月12日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220312-3",
        price:300
      },
      {
        date: "3月13日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220313-4",
        price:300
      },
      {
        date: "3月19日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220319-5",
        price:300
      },
      {
        date: "3月20日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220320-6",
        price:300
      }
    ]
  },
  {
    id:4,
    date: "2022年4月",
    schedule: [
      {
        date: "4月16日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220416-1",
        price:300
      },
      {
        date: "4月17日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220417-2", 
        price:300
      },
      {
        date: "4月23日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["新竹街口攻城獅", 0],
        stage: "ready",
        gameId: "P20220423-3",
        price:300
      },
      {
        date: "4月24日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220424-4",
        price:300
      }
    ]
  },
  {
    id:5,
    date: "2022年5月",
    schedule: [
      {
        date: "5月28日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220528-1",
        price:300
      },
      {
        date: "5月29日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220529-2",
        price:300
      }
    ]
  },
  {
    id:6,
    date: "2022年6月",
    schedule: [
      {
        date: "6月4日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["新竹街口攻城獅", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220604-1",
        price:300
      },
      {
        date: "6月5日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220605-2",
        price:300
      },
      {
        date: "6月11日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220611-3",
        price:300
      },
      {
        date: "6月12日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220612-4",
        price:300
      },
      {
        date: "6月18日(六) 15:30",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["桃園領航猿", 0],
        guestTeam: ["臺北富邦勇士", 0],
        stage: "ready",
        gameId: "P20220618-5",
        price:300
      },
      {
        date: "6月19日(日) 17:00",
        location: "桃園市立綜合體育館",
        type: "例行賽",
        homeTeam: ["臺北富邦勇士", 0],
        guestTeam: ["福爾摩沙台新夢想家", 0],
        stage: "ready",
        gameId: "P20220619-6",
        price:300
      }
    ]
  }
];
export { menuConfig };