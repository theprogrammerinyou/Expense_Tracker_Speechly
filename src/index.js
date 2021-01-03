import React from "react";
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId = "8d9f861c-4f68-405d-b82c-c8b1699692dc" language = "en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
); 