import styled from 'styled-components';

export const Container = styled.div`
  min-height: 692px;
  padding-bottom: 18%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background-color: grey;
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
  margin-left: 5%;
  background: white;
  text-align: center;
  max-width: 500px;
  height: auto;
  z-index: 1;
  display: grid;
  margin-top: -35%;
  padding: 70px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 25px 32px;
    margin-top: 40px;
    
  }
`;


export const Formbis = styled.form`
  background: #A1E6E6;
  text-align: center;
  max-width: 1400px;
  margin-top: 10%;
  margin-left: 50%;
  z-index: 1;
  display: grid;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  width: 700px;
  height: 600px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;

  @media screen and (max-width: 400px) {
    padding: 25px 32px;
    margin-top: 40px;
    
  }
`;

export const Titre = styled.div`
font-size: 25px;
padding-top: 2%;
  }
`;
