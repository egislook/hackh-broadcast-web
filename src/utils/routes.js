// Misc routes
import NotFound from '../components/NotFound/NotFound';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
// Register Routes

// Application routes
const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/login', component: Login, exact: true },
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
