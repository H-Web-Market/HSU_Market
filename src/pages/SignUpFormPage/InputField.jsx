import React from 'react';
import styles from './SignUpForm.module.css';

const InputField = ({ iconSrc, iconAlt, placeholder, type = 'text', id }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputIcon}>
        <img loading="lazy" src={iconSrc} alt={iconAlt} className={styles.icon} />
      </div>
      <label htmlFor={id} className={styles['visually-hidden']}>{placeholder}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.inputText}
        aria-label={placeholder}
      />
    </div>
  );
};

export default InputField;