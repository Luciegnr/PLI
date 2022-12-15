import styled from 'styled-components';

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

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 10%;
  margin-left: 10%;
  background: #A1E6E6;
  text-align: center;
  max-width: 400px;
  z-index: 1;
  display: grid;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 25px 32px;
    margin-top: 40px;
    
  }
`;

export const Form2 = styled.form`
  margin-top: 2%;
  margin-left: 10%;
  background: #A1E6E6;
  text-align: center;
  max-width: 400px;
  z-index: 1;
  display: grid;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 25px 32px;
    margin-top: 40px;
    
  }
`;

export const Pop  = styled.p`
  color: black;
`;


export const Container = styled.div`
  min-height: 692px;
  padding-bottom: 5%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: grey;
`;


export const Formbis = styled.form`
  background: white;
  text-align: center;
  max-width: 500px;
  height: auto;
  z-index: 1;
  display: grid;
  margin-top: -45%;
  margin-left: 57%;
  padding: 70px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

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

export const FormWrap2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const H3 = styled.h3`
  color: black;
  margin-top: 5%;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  font-weight: bold;
`;