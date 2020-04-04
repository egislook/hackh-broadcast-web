// Misc routes
import NotFound from '../components/NotFound/NotFound';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
// Register Routes

// Application routes
const routes = [
  { path: '/', component: Login, exact: true },
  { component: NotFound },
];

const redirects = [
  {
    from: '/test',
    to: '/',
    exact: true,
  },
];


export {
  redirects,
  routes,
};
