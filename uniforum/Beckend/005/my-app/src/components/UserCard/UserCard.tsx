// src/components/UserCard/UserCard.tsx
import { h } from 'preact';
import { User } from '../../types/types';
import './UserCard.css';

interface UserCardProps {
  user: User;
  isActive: boolean;
  children: React.ReactNode;
}

const UserCard = ({ user, isActive, children }: UserCardProps) => {
  return (
    <div className={`user-card ${isActive ? 'active' : 'inactive'}`}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
      <div>{children}</div>
    </div>
  );
};

export default UserCard;
