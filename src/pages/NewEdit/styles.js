import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &:nth-child(2) {
        height: 120px;
      }

      &::placeholder {
        color: #7A7A72;
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
