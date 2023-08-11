import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg">{children}</div>;
};

export default Card;
