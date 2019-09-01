import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  div {
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;

    button {
      display: flex;
      border: 0;
      width: 130px;
      height: 32px;
      border-radius: 3px;
      background: #ff366a;
      color: #fff;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#F64C75')};
      }

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
      }
    }
  }
`;
