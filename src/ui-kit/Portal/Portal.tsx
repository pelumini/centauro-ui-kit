/* eslint-disable no-undef */
import React from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';

export interface IPortalProps {
  className?: string;
  element?: keyof JSX.IntrinsicElements;
  elementFindById: string;
}

export const Portal: React.FC<IPortalProps> = ({
  className,
  children,
  element: Element = 'div',
  elementFindById,
}) => {
  const root = document.getElementById(elementFindById);

  return root
    ? ReactDOM.createPortal(
        <Element className={cn('Portal', className)}>{children}</Element>,
        root
      )
    : null;
};
