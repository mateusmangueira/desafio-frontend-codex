import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 120px;
  header {
    h1 {
      color: #555274;
    }
    display: flex;
    align-items: center;
    width: 1200px;
    justify-content: space-between;
  }
  div {
    display: flex;
    align-items: center;
    button {
      margin-right: 16px;
    }
  }
`;

export const ListTasks = styled.div`
  table {
    margin-top: 20px;
    width: 1200px;
    background: #fff;
    padding: 30px 30px 0px 30px;
    button {
      align-items: top;
    }
    th {
      text-align: left;
      padding-bottom: 20px;
      color: #555274;
    }
    tbody tr {
      & + tr {
        td {
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
      }
    }
    td {
      padding-bottom: 15px;
      font-size: 16px;
      color: #666;
      div {
        display: flex;
        justify-content: flex-end;
        a {
          margin-right: 23px;
          color: ${colors.info};
        }
        button {
          font-size: 16px;
          margin-right: 0;
          background: none;
          border: 0;
          color: ${colors.primary};
        }
      }
    }
  }
`;

