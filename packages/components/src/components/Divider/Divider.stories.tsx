import React from 'react';
import { Divider, DividerProps } from '.';

export default {
  title: 'Components/Divider',
  component: Divider,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (props: DividerProps) => <div style={{ margin: '20px', width: '500px', height: '500px' }}><Divider {...props} /></div>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Horizontal = (props: DividerProps) => <Template {...props} />;

Horizontal.args = {
  direction: 'horizontal',
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Vertical = (props: DividerProps) => <Template {...props} />;

Vertical.args = {
  direction: 'vertical',
};
