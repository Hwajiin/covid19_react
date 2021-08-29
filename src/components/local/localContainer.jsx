import React from "react";
import styled from "styled-components";
import { getYesterday } from "../../service/date";
import Info from "../info";

const Container = styled.div``;

const LocalContainer = ({ data, data: { mySidoData } }) => {
  console.log(mySidoData);
  console.log(data);
  return data.loading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Info
        name={mySidoData.gubun}
        yesterday={getYesterday()}
        total={mySidoData.incDec}
        local={mySidoData.localOccCnt}
        overflow={mySidoData.overFlowCnt}
      />
    </Container>
  );
};

export default LocalContainer;
