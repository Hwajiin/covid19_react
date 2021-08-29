import axios from "axios";

const KAKAO_MAP_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

//get today's year, month and day
const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const parsedMonth = date.getMonth() + 1;
  const month = parsedMonth < 10 ? `0${parsedMonth}` : parsedMonth;
  const day = date.getDate();
  return `${year}${month}${day}`;
};

// covid19 open api
const covidDateApi = axios.create({
  baseURL: "/openapi/service/rest/Covid19",
  params: {
    ServiceKey: process.env.REACT_APP_API_KEY,
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: getToday(),
    endCreateDt: getToday(),
  },
});

const covidData = {
  getData: () => covidDateApi.get("/getCovid19SidoInfStateJson"),
};

// kakao map api
export const kakaoMapApi = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local/geo",
  headers: {
    Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
  },
});

export default covidData;
