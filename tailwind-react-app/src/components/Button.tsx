import React from 'react';

interface ButtonProps {
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'outlined';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'primary', children }) => {
  const buttonClasses = `py-2 px-4 rounded-md ${type === 'primary' ? 'bg-blue-500 text-white' : type === 'secondary' ? 'bg-gray-300 text-gray-700' : 'border border-gray-500 text-gray-500'} hover:bg-opacity-80`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
