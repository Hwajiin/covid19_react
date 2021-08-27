import React, { useEffect, useState } from "react";
import Screen from "./components/screen";
import covidData from "./service/api";

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
    <div className="App">
      <Screen data={data} />
    </div>
  );
}

export default App;
