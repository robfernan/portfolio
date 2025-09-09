
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import './theme-vars.css';
import './fontawesome-import';

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
} else {
	throw new Error('Root element not found');
}
