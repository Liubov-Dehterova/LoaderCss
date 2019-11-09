import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import NewsOne from './components/NewsOne'
import './style.css';


const App = () => (
			<NewsOne />
		);

ReactDOM.render(
    <App />,

    document.getElementById('app')
)