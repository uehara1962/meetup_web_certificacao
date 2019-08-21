import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;

  input {
    display: none;
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  color: #7a7a72;
  opacity: 0.8;
  padding-bottom: 40px;
`;

export const Img = styled.img`
  height: ${props => (props.visible ? '50%' : '100%')};
  width: ${props => (props.visible ? '50%' : '100%')};
  opacity: ${props => (props.visible ? '0.5' : '1')};
`;
