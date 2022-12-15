import styled from 'styled-components';

export const Container = styled.div`
  min-height: 692px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: grey;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7%;
  margin-bottom: 5%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  text-align: center;
  background: white;
  max-width: 500px;
  height: auto;
  z-index: 1;
  display: grid;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 50%;
  padding: 70px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  margin-block: auto;

  @media screen and (max-width: 400px) {
    padding: 25px 32px;
    margin-top: 40px;
    
  }
`;

export const FormButton = styled.button`
  margin-top: 5%;
  background: #01bf71;
  padding: 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
