// src/App.tsx
import { h } from 'preact';
import UserCard from './components/UserCard/UserCard';
import SkillList from './components/SkillList/SkillList';
import { User, Skill } from './types/types';
import './App.css';

const sampleUser: User = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30,
};

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'React', level: 'Intermediate' },
  { id: 3, name: 'CSS', level: 'Beginner' },
];

const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to my Preact App!</h1>
      <UserCard user={sampleUser} isActive={true}>
        <p>This is a bio section.</p>
      </UserCard>
      <SkillList skills={skills} />
    </div>
  );
};

export default App;
