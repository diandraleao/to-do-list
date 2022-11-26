import S from "styled-components";

export const Task = S.div `
  padding: 1.5rem;
  position: relative;
  margin: 1rem 0;
  border-radius: .25rem;
  background-color: #FFF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .14);

  &:hover { 
    box-shadow: 0 5px 10px rgba(0, 0, 0, .14);
  }
`;

export const List = S.ul `
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const ListItemLabel = S.span `
  color: #DA3C78;
  font-weight: bold;
`;

export const ListItem = S.li `
  display: inline-block;
`;

export const Button = S.button `
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  outline: none;
  color: #FFF;
  background: none;
  cursor: pointer;
  line-height: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: sans-serif;
  position: absolute;
  border-radius: 1.5rem;
  background-color: #ced4da;
  padding: .2rem .35rem .35rem .35rem;

  &:hover, &:focus {
    color: #FFF;
    background-color: #FF6CA8;
  }
`;
