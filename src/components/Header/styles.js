import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${darken(0.02, '#221628')};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      // border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #ccc;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  // border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #ddd;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #666;
    }
  }

  button {
    height: 32px;
    width: 56px;
    border: none;
    border-radius: 5px;
    background: #ff366a;
    color: #fff;
    margin-left: 10px;
  }
`;
