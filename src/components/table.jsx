import React from "react";

const Thead = () => {
  return (
    <thead>
      <tr>
        <th>지역</th>
        <th>누적확진자</th>
        <th>신규확진자</th>
      </tr>
    </thead>
  );
};

const Row = ({ rowData }) => {
  return rowData.map((item, index) => {
    return <td key={index}>{item}</td>;
  });
};

const Tbody = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => {
        const rowData = [item.gubun, item.defCnt, item.incDec];
        return (
          <tr key={index}>
            <Row rowData={rowData} />
          </tr>
        );
      })}
    </tbody>
  );
};

const Table = ({ data }) => {
  return (
    <table>
      <Thead />
      <Tbody data={data} />
    </table>
  );
};

export default Table;
