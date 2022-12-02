import S from "styled-components";
import styles from '../../assets/css/variables';

export const HeaderBackground = S.div `
  background-color: ${styles.color.base.gray700}};
`;

export const BoxLogo = S.div `
  display: flex;
  justify-content: center;
`;

export const AllTasksTitle = S.span `
  font-size: ${styles.fontSize.md};
  color: ${styles.color.product.blue};
  font-weight: bold;
`;

export const RemainTasksTitle = S.span `
  text-align: right;
  font-size: ${styles.fontSize.md};
  color: ${styles.color.product.purple};
  font-weight: bold;
`;

export const StatusHeading = S.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: ${styles.space.lg};
`;

export const Counter = S.small `
  color: ${styles.color.base.gray200};
  font-weight: ${styles.fontWeight.bold};
  font-size: ${styles.fontSize.sm};
  padding: 2px ${styles.space.xs};
  background-color: ${styles.color.base.gray400};
  border-radius: 99px;
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