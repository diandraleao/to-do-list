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
  top: 135px;
  justify-self: center;
  align-self: center;
`;

export const Title = S.h1 `
  font-size: ${styles.fontSize.md};
  color: ${styles.color.product.blue};
  margin-bottom: ${styles.space.xs};
`;

export const Input = S.input `
  display: inline-block;
  width: 625px;
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
    background-color: ${styles.color.product.blue};
  }

  &:focus {
    outline: 0;
    border-color: ${styles.color.product.blueDark};
    box-shadow: 0 0 0 1px rgba(255, 188, 216, .5);
  }
`;
