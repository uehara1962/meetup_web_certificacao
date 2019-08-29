import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    margin-top: 30px;

    li {
      padding: 20px;
      border-radius: 4px;
      background: ${darken(0.01, '#221628')};
      display: flex;
      justify-content: space-between;

      strong {
        color: #fff;
      }

      span {
        // color: #fff;
        color: ${darken(0.4, '#fff')};
      }

      a {
        margin-left: 20px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    color: #fff;
    font-size: 24px;
    margin: 0 15px;
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    width: 130px;
    height: 32px;
    border-radius: 3px;
    background: #ff366a;
    color: #fff;
    img {
      color: #fff;
      width: 25px;
      margin: 0 5px;
    }

    span {
      color: #fff;
      height: 100%;
      width: 80px;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
