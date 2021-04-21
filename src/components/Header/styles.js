import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: ${colors.primary}
  }
`
