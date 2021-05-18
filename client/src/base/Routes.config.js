// import { lazy } from '@loadable/component';

import { Home } from '@pages';

// const Chat = lazy(() => import('@pages/Chat/Chat'));

export const ROUTES = [
  {
    path: '/',
    key: 'Home',
    exact: true,
    component: Home
  }
  // {
  //   path: '/chat',
  //   key: 'Chat',
  //   exact: true,
  //   component: Chat
  // }
];
