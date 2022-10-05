import React from 'react';
import ReactDOM from 'react-dom/client';

import { ClickCounter } from './ReactHooks/ClickCounter';
// import { Top } from './components/Top/Top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Top feature="Flag" firstAction="ctrl" secondAction="click">
  //   Minesweeper
  // </Top>
  <ClickCounter defaultCount={10} />
);
