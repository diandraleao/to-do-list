import S from "styled-components";
import styles from '../../assets/css/variables';

export const Task = S.div `
  height: 200px;
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100vw;
`;

export const Container = S.div `
  width: 736px;
  position: absolute;
  top: 150px;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = S.h1 `
  font-size: ${styles.fontSize.md};
  color: ${styles.color.product.blueLight};
  margin-bottom: ${styles.space.xs};
`;

export const Input = S.input `
  display: inline-block;
  width: 590px;
  background-color: ${styles.color.base.gray500};
  border: 1px solid ${styles.color.base.gray700};
  padding: ${styles.space.md};
  margin-right: ${styles.space.xs};
  font-size: ${styles.fontSize.lg};
  font-weight: ${styles.fontWeight.normal};
  line-height: ${styles.lineHeight};
  color: #495057;
  border-radius: ${styles.borderRadius};
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  
  ::placeholder {
    color: ${styles.color.base.gray300};
  }

  :focus {
    color: ${styles.color.base.gray100};
  }

`;
export const Button = S.button `
  color: ${styles.color.base.gray100};
  cursor: pointer;
  display: inline-block;
  background-color: ${styles.color.product.blueDark};
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: ${styles.space.md};
  font-weight: ${styles.fontWeight.normal};
  font-size: ${styles.fontSize.lg};
  line-height: ${styles.lineHeight};
  border-radius: ${styles.borderRadius};

  &:hover {
    background-color: ${styles.color.product.blueLight};
    transition: all 0.25s ease;
  }

  &:focus {
    filter: brightness(60%);
  }
  
  img {
    margin-left: ${styles.space.xs};
  }
`;
