import styled from 'styled-components';

export const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
`;

export const H1 = styled.h1`
padding-top : 7%;
  color: pink;
  font-size: 35px;
  font-weight: 200;
  text-align: center;
  font-weight: bold;
`;

export const Form = styled.form`
  background: white;
  text-align: center;
  max-width: 500px;
  margin: auto;
  height: auto;
  z-index: 1;
  display: grid;
  margin-top: 0px;
  margin-bottom: 0px;
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

export const FormWrap = styled.div`
  height: 100%;
  display: fixed;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: fixed;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Close = styled.a`
position: absolute;
top: 20px;
right: 30px;
transition: all 200ms;
font-size: 30px;
font-weight: bold;
text-decoration: none;
color: #333;
`;

export const Button = styled.button`
  
border: 0;
line-height: 2.5;
padding: 0 20px;
font-size: 1rem;
text-align: center;
color: #fff;
text-shadow: 1px 1px 1px #000;
border-radius: 10px;
background-color: rgb(49 116 172);
box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
            inset -2px -2px 3px rgba(0, 0, 0, .6);

&:hover {
  background-color: rgb(6 94 167);`;
  
  