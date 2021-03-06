import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './containers/ThemeContext';
import Background from './containers/Background';
import Toggle from './containers/ThemeToggle';
import Setting from './containers/Setting';
import { Example } from './components/menu/example.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="fixed right-0 top-0 mr-4 mt-4md:mt-6">
          <Setting />
        </div>
        <Example />
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
