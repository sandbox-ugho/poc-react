import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import './assets/style/main.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
