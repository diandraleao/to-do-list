import S from "styled-components";
import styles from '../../assets/css/variables';

export const HeaderBackground = S.div `
  background-color: ${styles.color.base.gray700}};
`;

export const Title = S.h3 `
  font-size: 22px;
`;

export const Counter = S.small `
  color: #aaa;
  font-weight: normal;
  font-size: 14px;
`;

export const List = S.ul `
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = S.li `
  display: block;
`;