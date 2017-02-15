import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import CurrencyCalcPage from './components/currency-calc/currency-calc.page.smart';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CurrencyCalcPage} />
  </Route>
);
