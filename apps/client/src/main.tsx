import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
