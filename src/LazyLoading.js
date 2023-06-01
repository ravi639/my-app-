// LazyLoading.js
import React from 'react';
import Loadable from 'react-loadable';
import { CSSPropertiess } from 'react';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./modules/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./modules/About'),
  loading: Loading,
});

export { Home, About };
