import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { RootStateProvider } from './stores/rootStore';

ReactDOM.render(
    <React.StrictMode>
        <RootStateProvider>
            <App />
        </RootStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
