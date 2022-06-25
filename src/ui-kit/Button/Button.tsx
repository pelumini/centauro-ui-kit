import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';
// import { Icon, IconType } from 'ui-kit';
import './Button.scss';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', className, {
        Button__disabled: isDisabled,
      })}
      data-testid="test-button"
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
