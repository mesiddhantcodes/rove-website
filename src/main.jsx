// import { render } from 'preact'
// import { App } from './app.jsx'
// import './index.css'

// render(<App />, document.getElementById('app'))


import { h, render } from 'preact';
import { Router } from 'preact-router';
import App from './app';
import LoginPage from './pages/login';
import './index.css'
const Main = () => (
  <Router>
    <App path="/" />
    <LoginPage path="/login" />
  </Router>
);

render(<Main />, document.getElementById('app'))
