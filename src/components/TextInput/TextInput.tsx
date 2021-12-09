// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { Typography } from '..';
import styles from './TextInput.module.css';

type InputProps = React.HTMLProps<HTMLInputElement>;
type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>;

type BaseProps = {
  input: InputProps;
  textarea: TextAreaProps;
};

type Props<T = BaseProps> = {
  label?: string;
  variant?: 'large' | 'medium';
  base?: keyof T;
  error?: string;
} & T[keyof T];

const TextInput: React.FC<Props> = ({ variant = 'large', base = 'input', label, error, ...rest }) => {
  const className = [
    styles.base,
    variant === 'large' ? styles.large : styles.medium,
    error ? styles.error : undefined,
    rest.className,
  ].join(' ');

  return (
    <div>
      {label && (
        <label htmlFor={rest.name}>
          <Typography className={styles.label}>{label}</Typography>
        </label>
      )}

      {base === 'input' ? (
        <input {...(rest as InputProps)} className={className} />
      ) : (
        <textarea {...(rest as TextAreaProps)} className={className} />
      )}
      {error && (
        <Typography variant="medium" className={styles.errorText}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
