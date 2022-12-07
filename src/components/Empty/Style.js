import S from "styled-components";
import styles from '../../assets/css/variables';


export const Box = S.div `
  display: block;
`;

export const Image = S.img `
  margin: 0 auto;
  display: block;
  margin-bottom: ${styles.space.lg};
`;

export const Title = S.p `
  display: block;
  width: 100%;
  color: ${styles.color.base.gray300}};
  font-weight: ${styles.fontWeight.bold};
  text-align: center;
  line-height: ${styles.lineHeight};
  font-size: ${styles.fontSize.lg};
`;

export const SubTitle = S.p `
  display: block;
  width: 100%;
  color: ${styles.color.base.gray300}};
  text-align: center;
  line-height: ${styles.lineHeight};
  font-size: ${styles.fontSize.lg};
`;
