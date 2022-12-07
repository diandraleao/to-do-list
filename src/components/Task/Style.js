import S from "styled-components";
import styles from '../../assets/css/variables';

export const Box = S.div `
  padding: ${styles.space.md};
  position: relative;
  margin-bottom: ${styles.space.sm};
  background-color: ${styles.color.base.gray500};
  border: 1px solid ${styles.color.base.gray400};
  box-shadow: 0px 2px ${styles.space.xs} rgba(0, 0, 0, 0.06);
  border-radius: ${styles.borderRadius};

  &:hover { 
    box-shadow: 0 5px 10px rgba(0, 0, 0, .14);
  }
`;

export const AllTasksTitle = S.span `
  font-size: ${styles.fontSize.md};
  color: ${styles.color.product.blueLight};
  font-weight: bold;
`;

export const CompletedTasksTitle = S.span `
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
  margin-left: ${styles.space.xs};
  background-color: ${styles.color.base.gray400};
  border-radius: 99px;
`;

export const LabelTitle = S.span `
  width: 90%;
  display: inline-block;
  margin-left: ${styles.space.sm};
  margin-right: ${styles.space.sm};
  font-size: ${styles.fontSize.md};
  color: ${styles.color.base.gray100};
  font-weight: ${styles.fontWeight.normal};
  font-size: ${styles.fontSize.md};
  line-height: ${styles.lineHeight};

  &.completed {
    text-decoration: line-through;
    color: ${styles.color.base.gray300};
  }
`;

export const Button = S.button `
  position: absolute;
  top: ${styles.space.md};
  right: ${styles.space.md};
  border: none;
  outline: none;
  color: #FFF;
  background: none;
  cursor: pointer;
  border-radius: ${styles.borderRadius};

`;
