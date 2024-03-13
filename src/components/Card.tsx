import React, { FC } from 'react';

export enum cardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICard  {
  width: string;
  height: string;
  children: React.ReactNode;
  variant : cardVariant;
}

const Card: FC<ICard> = ({width, height, children, variant}) => {
  
  return (
    <div style={{width, height, border: variant === cardVariant.outlined ? '1px solid gray' : 'none', background: variant === cardVariant.primary ? 'lightgray' : ''}}
    >
        {children}
    </div>
  );
};

export default Card;