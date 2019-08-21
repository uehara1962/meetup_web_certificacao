import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 32px;

    strong {
      color: #fff;
      font-size: 28px;
    }

    div {
      display: flex;
      width: 240px;
      height: 100%;
      justify-content: space-between;
      align-items: center;

      a {
        // display: flex;
        // align-items: center;
        // height: 32px;

        button {
          display: flex;
          align-items: center;
          border: 0;
          width: 110px;
          height: 32px;
          border-radius: 3px;
          background: #619aff;
          color: #fff;

          img {
            height: 100%;
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

        // &:nth-child(2) {
        //   button {
        //     background: #ff366a;
        //     color: white;
        //   }
        // }
      }
    }
  }

  span {
    margin-top: 30px;
    width: 100%;
    color: #fff;
    font-size: 16px;
  }

  // div {
  //   margin-top: 30px;

  //   strong {
  //     color: #fff;
  //     font-size: 24px;
  //   }
  // }
`;

export const DivImg = styled.div`
  margin-top: 35px;
  max-width: 100%;
  height: 300px;
  background: #000;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  margin: 50px 0;
  max-width: 100%;
  height: 65px;

  div {
    margin-right: 20px;
    display: flex;
    align-items: baseline;
    img {
      width: 25px;
      margin: 0 5px;
    }

    span {
      color: #ccc;
      height: 100%;
      width: 280px;
      font-size: 14px;
    }
  }
`;
