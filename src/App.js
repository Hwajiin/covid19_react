import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import covidData, { kakaoMapApi } from "./service/api";
import styled from "styled-components";
import Header from "./components/header/header";

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
`;

function App() {
  const initialState = {
    loading: true,
    covidData: null,
    nationData: null,
    sortedData: null,
    sidoName: null,
    mySidoData: null,
    error: null,
  };

  const [data, setData] = useState(initialState);

  const getCovidData = async () => {
    // covid19 open api에서 data 받아오기
    const {
      data: {
        response: {
          body: {
            items: { item },
          },
        },
      },
    } = await covidData.getData();

    // 우리지역 위도, 경도 가져오기 + kakao map api 통해 좌표를 주소로 변환
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const {
        coords: { latitude, longitude },
      } = pos;
      const geoData = await kakaoMapApi.get("/coord2address.json", {
        params: {
          x: longitude,
          y: latitude,
        },
      });
      const { data } = geoData;
      const sidoName = data.documents[0].address.region_1depth_name;
      const mySidoData = item.find((data) => data.gubun === sidoName);
      const nationData = item.find((data) => data.gubun === "합계");
      const sortedData = item
        .filter((data) => data.gubun !== "합계" && data.gubun !== "검역")
        .sort((a, b) => (a.incDec > b.incDec ? -1 : 1));

      setData({
        loading: false,
        error: null,
        covidData: item,
        nationData,
        sortedData,
        mySidoData,
      });
    });
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <SApp className="App">
      <Header />
      <Routes data={data} />
    </SApp>
  );
}

export default App;
