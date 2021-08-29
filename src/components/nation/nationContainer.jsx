import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { getYesterday, makeTable } from "../../service/date";
import Info from "../info";
import Table from "../table";

const Container = styled.div``;

const NationContainer = ({ data, data: { nationData, sortedData } }) => {
  console.log(sortedData);
  return data.loading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Info
        name="국내현황"
        total={nationData.incDec}
        yesterday={getYesterday()}
        local={nationData.localOccCnt}
        overflow={nationData.overFlowCnt}
      />
      <Table data={sortedData} />
    </Container>
  );
};

export default NationContainer;
