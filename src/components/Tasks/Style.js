import S from "styled-components";
import styles from '../../assets/css/variables';

export const TopBar = S.div `
  display: block;
  position: absolute;
  right: ${styles.space.xs};
  top: ${styles.space.xs};
`;

export const TopBarButton = S.button `
  display: inline-block;
  background-color: transparent;
  color: white;
  border: transparent;
  font-size: ${styles.fontSize.sm};

  &:hover {
    cursor: pointer;
  }

  &:first-of-type {
    margin-right: ${styles.space.xs};
  }
`;

export const TopBarButtonIcon = S.img `
  height: auto;
  width: 26px;
  display: block;
  margin: 0 auto;
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