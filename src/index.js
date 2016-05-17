import { create, render } from 'mozilla-neo';
import routes from './routes';
import Layout from './layout';

const reducers = {
  title: state => state
};
const initialState = {
  title: 'Neo Example App'
};

render(
  create(reducers, initialState),
  Layout,
  routes
);
