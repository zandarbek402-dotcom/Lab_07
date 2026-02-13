// main.tsx
import { h, render } from 'preact';  // Preact-ты импорттаймыз
import './index.css';  // Стилиздеу
import App from './App'; // App компонентін импорттаймыз

// Preact қолданамыз, React емес
render(<App />, document.getElementById('app')!);
