import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  margin-top: 64px;
  margin-right: 32px;
  margin-bottom: 64px;
  margin-left: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;

export const Paper = styled.div`
  margin-top: 10%;
  margin-right: 32px;
  margin-bottom: auto;
  margin-left: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormButton = styled.button`
  background: #01bf71;
  height: 5%;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;


export const LinkCss = styled(LinkR)`
    color: darkgreen;
    text-decoration: none;
    margin-top: 24px;
`;



