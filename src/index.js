import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ErrorBoundary } from './ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddPatient from './routes/AddPatient';
import Diagnose from './routes/Diagnose';
import App from './App';
import Start from './routes/Start';
import Question from './routes/Question';
import Scofr from './routes/Scofr';
import Rsv from './routes/Rsv';
// import Auth from './Auth';

const dev = process.env.NODE_ENV === 'development';
console.log('all', process.env)
console.log('dev', process.env.NODE_ENV)
if (!window.pglOptions) window.pglOptions = {};
// const userPromise = fetch(url + 'login', { credentials: 'include' });

for (let [key, value] of Object.entries({
  dev,
  validate: true,
  prefill: dev,
  showState: dev,
  settings: dev,
  stayLoggedIn: false,
})) {
  const ls = localStorage[key]; //it's a string!!!!!
  if (ls) {
    window.pglOptions[key] = ls === 'true' ? true : false;
  } else {
    window.pglOptions[key] = value;
  }
}
window.patients = [
  { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com' }
]
window.notes = []
ReactDOM.render(
  <ErrorBoundary>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="addpatient" element={<AddPatient />} />
            <Route path="diagnose" element={<Diagnose />} >
              <Route path="" element={<Start />} />
              <Route path="question" element={<Question />} />
              <Route path="scofr" element={<Scofr />} />
              <Route path="rsv" element={<Rsv />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// if (dev) {
//   const script = document.createElement('script');
//   script.src = 'reload/reload.js';
//   script.id = 'reload';
//   document.body.appendChild(script);
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
