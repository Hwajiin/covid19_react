import axios from "axios";

//get today's year, month and day
const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const parsedMonth = date.getMonth() + 1;
  const month = parsedMonth < 10 ? `0${parsedMonth}` : parsedMonth;
  const day = date.getDate();
  return `${year}${month}${day}`;
};

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

export default covidData;
