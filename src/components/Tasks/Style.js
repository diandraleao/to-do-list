import S from "styled-components";
import styles from '../../assets/css/variables';

export const TopBar = S.div `
  display: block;
  float: right;
`;

export const HeaderBackground = S.div `
  background-color: ${styles.color.product.blue}};
`;

export const BoxLogo = S.div `
  display: flex;
  justify-content: center;
`;

export const Image = S.img `
  position: absolute;
  top: 55px;
`;

export const List = S.ul `
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = S.li `
  display: block;
`;

export const Container = S.div `
  width: 736px;
  margin: 0 auto;
  padding-top: 90px;
`;