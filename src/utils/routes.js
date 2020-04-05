import '../assets/css/bootstrap.min.css';
import '../assets/scss/paper-kit.scss';
import '../assets/demo/demo.css';
// Misc routes
import NotFound from '../components/NotFound/NotFound';
import Login from '../views/Login/Login';
import OTP from '../views/OTP/OTP';
import Outbox from '../views/Outbox/Outbox';
import Home from '../views/Home/Home';
import Messenger from '../views/Messenger/Messenger';
// Register Routes

// Application routes
const routes = [
  { path: '/', component: Home, exact: true, private: true },
  { path: '/login', component: Login, exact: true },
  { path: '/otp', component: OTP, exact: true },
  { path: '/outbox', component: Outbox, exact: true },
  { path: '/messenger-text', component: Messenger, exact: true },
  { path: '/telegram-style-1', component: Home, exact: true },
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
