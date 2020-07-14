/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout';

const errorRoutes = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  hidden: true,
  meta: {
    title: 'errorPages',
    icon: '404',
  },
  children: [{
    path: '401',
    component: () =>
                import ('@/views/error-page/401'),
    name: 'Page401',
    hidden: true,
    meta: { title: 'page401' },
  },
  {
    path: '404',
    component: () =>
                import ('@/views/error-page/404'),
    name: 'Page404',
    hidden: true,
    meta: { title: 'page404' },
  },
  ],
};

export default errorRoutes;
