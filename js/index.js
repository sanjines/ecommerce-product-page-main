const d = document;
import hamburger from './components/hamburger.js';



d.addEventListener('DOMContentLoaded', (e) => {
  hamburger('.nav', '.hamburger', '.nav-close', 'body');
});