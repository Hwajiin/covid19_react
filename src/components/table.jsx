import React from "react";
import styled from "styled-components";

const STable = styled.table`
  width: 350px;
  height: 450px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: table;
`;

const SThead = styled.thead`
  height: 40px;
  font-weight: 600;
  border-bottom: 1px solid black;
`;

const STh = styled.th`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const STbody = styled.tbody`
  height: 100%;
`;

const STr = styled.tr``;

const STd = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 15px;
  &:first-child {
    font-weight: 600;
  }
  &:last-child {
    color: #f44336;
  }
`;

const Thead = () => {
  return (
    <SThead>
      <tr>
        <STh>지역</STh>
        <STh>누적확진자</STh>
        <STh>신규확진자</STh>
      </tr>
    </SThead>
  );
};

const Row = ({ rowData }) => {
  return rowData.map((item, index) => {
    return <STd key={index}>{item}</STd>;
  });
};

const Tbody = ({ data }) => {
  return (
    <STbody>
      {data.map((item, index) => {
        const rowData = [
          item.gubun,
          item.defCnt.toLocaleString("ko-KR"),
          item.incDec.toLocaleString("ko-KR"),
        ];
        return (
          <STr key={index}>
            <Row rowData={rowData} />
          </STr>
        );
      })}
    </STbody>
  );
};

const Table = ({ data }) => {
  return (
    <STable>
      <Thead />
      <Tbody data={data} />
    </STable>
  );
};

export default Table;
