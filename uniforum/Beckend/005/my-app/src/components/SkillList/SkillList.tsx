// src/components/SkillList/SkillList.tsx
import { h } from 'preact';
import { Skill } from '../../types/types';
import './SkillList.css';

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill.id} className={`skill ${skill.level.toLowerCase()}`}>
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
