import React, { CSSProperties, FC } from 'react';
import styles from './Box.module.css';

export type CSSStyleObject = CSSProperties & {
  [key in `--${string}`]: string;
} & {
  '--gap'?: string;

};

type BoxProps = {
  style?: CSSStyleObject;
  className?: string;
  children: React.ReactNode;
};

export const Box: FC<BoxProps> = (props) => {
  const {
    className = '',
    style,
    children,
  } = props;

  return (
    <div
      className={[className, styles.box].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
};
