import React from 'react';
import ReactDOM from 'react-dom/client';

import { Top } from './components/Top/Top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Top feature="Flag" firstAction="ctrl" secondAction="click">
    Minesweeper
  </Top>
);
