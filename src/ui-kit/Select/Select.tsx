/* eslint-disable import/no-named-default */
import React, { FocusEventHandler } from 'react';
import classNames from 'classnames';
import {
  ActionMeta,
  default as ReactSelect,
  DropdownIndicatorProps,
  GroupBase,
  MultiValue,
  MultiValueRemoveProps,
  OnChangeValue,
  SingleValue,
  StylesConfig,
} from 'react-select';
import './Select.scss';

export interface ISelectOption {
  value: string;
  label: string;
}

export type isMultiType = true | false;
export type DropdownIndicatorType = React.ComponentType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DropdownIndicatorProps<any, any, GroupBase<any>>
>;
export type MultiValueRemoveType = React.ComponentType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MultiValueRemoveProps<any, isMultiType, GroupBase<any>>
>;

export interface ISelectProps {
  className?: string;
  DropdownIndicator?: DropdownIndicatorType;
  isMulti?: isMultiType;
  MultiValueRemove?: MultiValueRemoveType;
  options: ISelectOption[];
  styles?: StylesConfig<ISelectOption, isMultiType, GroupBase<ISelectOption>>;
  value: SingleValue<ISelectOption> | MultiValue<ISelectOption>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (
    value: OnChangeValue<ISelectOption, isMultiType>,
    action: ActionMeta<ISelectOption>
  ) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const Select: React.FC<ISelectProps> = ({
  className,
  DropdownIndicator,
  isMulti = false,
  MultiValueRemove,
  options,
  styles,
  value,
  onBlur,
  onChange,
  onFocus,
}) => {
  return (
    <ReactSelect
      className={classNames('Select', className)}
      components={{
        DropdownIndicator,
        MultiValueRemove,
      }}
      isMulti={isMulti}
      options={options}
      styles={styles}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};
