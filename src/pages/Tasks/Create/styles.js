import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 270px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    margin-bottom: 24px;
    h1 {
      color: #555274
    }
    div {
      display: flex;
      align-items: center;
    }
  }

  span {
    height: 25px;
    width: 255px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #555274
  }

  Input {
    background-color: #fff;
  }
`;
