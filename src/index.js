import react from 'react';
import reactDOM from 'react-dom/client';
import App from './Component/App';
import './styles/style.css';

let rootElm = document.getElementById('root');

reactDOM.createRoot(rootElm).render(<App />);
