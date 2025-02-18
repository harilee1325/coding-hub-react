import React, { ChangeEvent } from 'react';
import styles from './components_style/Dropdown.module.scss';

interface DropdownProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ id, label, value, options, onChange }) => {
    
  return (
    <div className={styles.selector}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} value={value} onChange={onChange} className={styles.select}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
