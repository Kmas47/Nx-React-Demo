import { ReactNode } from 'react';
import './card.scss';

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
