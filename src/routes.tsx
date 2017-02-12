import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CurrencyCalcPage from './components/currency-calc/CurrencyCalcPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CurrencyCalcPage} />
  </Route>
);
