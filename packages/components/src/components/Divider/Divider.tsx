import { CSSProperties, FC } from 'react';

/** Styles */
import styles from './Divider.module.css';

/** Prop Values */
export type CSSStyleObject = CSSProperties & {
  [key in `--${string}`]: string;
} & {
  '--gap'?: string;

};

export type ClassStyle = {
  className?: string,
  style?: CSSStyleObject
};

export type DividerProps = {
  direction?: 'horizontal' | 'vertical',
  variant?: 'default' | 'inverted',
  padded?: boolean;
} & ClassStyle;

export const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  variant = 'default',
  padded = true,
  style = {},
  className = '',
}) => (
  direction === 'horizontal'
    ? (
      <hr
        className={[styles.container, className].join(' | ')}
        style={style}
        data-variant={variant}
        data-padded={padded}
      />
    ) : (
      <div
        className={[styles.container, className].join(' | ')}
        style={style}
        data-variant={variant}
        data-padded={padded}
      />
    )
);
