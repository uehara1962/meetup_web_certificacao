import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;

    strong {
      color: #fff;
      font-size: 28px;
    }

    div {
      display: flex;

      a {
        button {
          display: flex;
          align-items: center;
          border: 0;
          width: 100px;
          height: 32px;
          border-radius: 3px;
          background: #4e8fff;
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
            font-weight: bold;
            font-size: 12px;
          }
        }
        &:nth-child(2) {
          margin-left: 10px;
          button {
            background: #ff366a;
          }
        }
      }
    }
  }

  > span {
    margin-top: 20px;
    color: #fff;
    font-size: 14px;
  }
`;

export const DivImg = styled.div`
  margin-top: 35px;
  max-width: 100%;
  height: 300px;
  background: #000;
  img {
    height: 300px;
    width: 100%;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  margin: 50px 0;
  max-width: 100%;
  height: 45px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }

    span {
      color: #ccc;
      height: 100%;
      width: 200px;
      font-size: 14px;
    }

    &:nth-child(2) {
      span {
        width: 500px;
      }
    }
  }
`;
