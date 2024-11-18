import React from 'react';
import styles from './Login.module.css';

const InputField = ({ iconSrc, label, type, value, onChange }) => {
  const inputId = `${label.toLowerCase()}Input`;
  
  return (
    <div className={styles.inputContainer}>
      <img loading="lazy" src={iconSrc} alt="" className={styles.inputIcon} />
      <label htmlFor={inputId} className={styles.visually_hidden}>{label}</label>
      <input
        type={type}
        id={inputId}
        placeholder={label}
        aria-label={label}
        className={styles.inputLabel}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;