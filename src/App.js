import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import covidData from "./service/api";
import styled from "styled-components";

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const initialState = {
    loading: true,
    covidData: null,
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
    setData({ loading: false, error: null, covidData: item });
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <SApp className="App">
      <Routes data={data} />
    </SApp>
  );
}

export default App;
