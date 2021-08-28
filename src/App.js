import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import covidData from "./service/api";
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
    error: null,
  };

  const [data, setData] = useState(initialState);

  const getCovidData = async () => {
    const {
      data: {
        response: {
          body: {
            items: { item },
          },
        },
      },
    } = await covidData.getData();
    const nationData = item.find((data) => data.gubun === "합계");
    const sortedData = item
      .filter((data) => data.gubun !== "합계")
      .sort((a, b) => (a.incDec > b.incDec ? -1 : 1));
    setData({
      loading: false,
      error: null,
      covidData: item,
      nationData,
      sortedData,
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
