import S from "styled-components";

export const Task = S.div `
  margin: 2rem 0;
  padding: 1.25rem;
  background-color: #FFF;
  background-color: #FFEBF3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .14);
`;
export const Title = S.h2 `
  font-size: 1.25rem;
  text-transform: capitalize;
  color: #CA2C68;
`;
export const Linha = S.div `
  display: flex;
  flex-wrap: wrap;
  margin: 0 -.5rem;
  padding: .5rem 0;
`;
export const Label = S.label `
  font-weight: bold;
  display: inline-block;
  margin-bottom: .5rem;
`;
export const Input = S.input `
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #495057;
  background-color: #FFF;
  border: 1px solid #FFBCD8;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus {
    outline: 0;
    border-color: #FF8CC8;
    box-shadow: 0 0 0 .2rem rgba(255, 188, 216, .5);
  }
`;
export const Button = S.button `
color: #FFF;
cursor: pointer;
display: inline-block;
background-color: #FF6CA8;
text-align: center;
vertical-align: middle;
border: 1px solid transparent;
padding: 8px 16px;
margin-top: 16px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border-radius: 8px;
transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

&:hover {
  background-color: #DA3C78;
}

&:focus {
  outline: 0;
  border-color: #FF8CC8;
  box-shadow: 0 0 0 .2rem rgba(255, 188, 216, .5);
}
`;
export const FooterLabel = S.span `
  display: block;
  font-size: 12px;
  margin-top: 12px;
`;