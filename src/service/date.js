export const getYesterday = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate() - 1;
  return `${month}.${day}`;
};

const makeTableBody = (data) => {
  for (let i = 0; i < data.length; i++) {
    return `
      <tr>
        <td>${data[i].gubun}</td>
        <td>${data[i].defCnt}</td>
        <td>${data[i].incDec}</td>
      </tr>
    `;
  }
};

export const makeTable = (data) => {
  return `
    <table>
      <thead>
        <tr>
          <th>지역</th>
          <th>누적확진자</th>
          <th>신규확진자</th>
        </tr>
      </thead>
      <tbody>
        ${makeTableBody(data)}
      </tbody>
    </table>
  `;
};
