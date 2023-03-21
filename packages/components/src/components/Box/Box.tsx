import React, { FC } from 'react';
import { ClassStyle } from '../../types/ClassStyle.model';
import styles from './Box.module.css';

type BoxProps = ClassStyle;

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
