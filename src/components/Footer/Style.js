import S from "styled-components";
import styles from '../../assets/css/variables';

export const Footer = S.footer `
  font-size: ${styles.fontSize.md};
  color: ${styles.color.base.gray200};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${styles.color.product.blue};
  padding: ${styles.space.md};
`;
