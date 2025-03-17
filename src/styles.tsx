import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 5rem 14rem 7.5rem;
  background-color: #f1f4f9;
  height: 74vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`;
export const Thead = styled.thead`
  line-height: 148%;
  vertical-align: middle;
  height: 4rem;
  tr th {
    font-weight: 400;
    text-align: left;
    padding: 0 0.5rem;
  }
  tr th div {
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  tr th:last-child div {
    justify-content: flex-end;
  }
`;
export const Trow = styled.tr`
  border-top: 1px solid #eaf0fa;
  height: 4rem;
  cursor: pointer;

  td {
    color: #122945;
    padding: 0 0.5rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableStyle = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;

  display: block;
  overflow-y: scroll;
  height: 70vh;

  border-radius: 0.5rem;
  box-shadow: 0px 4px 5px 0px #e9edf3;
  padding: 0rem 2rem 3.25rem;
`;
export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
export const Mark = styled.div`
  border: 1px solid #c71a1a;
  border-radius: 0.25rem;
  text-align: center;
  padding: 0.25rem;
`;
export const BadMark = styled(Mark)`
  color: #ea1a4f;
  border-color: #ea1a4f;
  background-color: #fee9ef;
`;
export const GoodMark = styled(Mark)`
  color: #122945;
  border-color: #adbfdf;
  background-color: #d8e4fb;
`;
export const ExcelentMark = styled(Mark)`
  color: #00a775;
  border-color: #28a879;
  background-color: #dbf8ef;
`;
export const NoUsageMark = styled.div`
  color: #ea1a4f;
`;
