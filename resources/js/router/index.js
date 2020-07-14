import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';
import tableRoutes from './modules/table';
import errorRoutes from './modules/error';

export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () =>
                import ('@/views/redirect/index'),
  }],
},
{
  path: '/login',
  component: () =>
            import ('@/views/login/index'),
  hidden: true,
},
{
  path: '/auth-redirect',
  component: () =>
            import ('@/views/login/AuthRedirect'),
  hidden: true,
},
{
  path: '/404',
  redirect: { name: 'Page404' },
  component: () =>
            import ('@/views/error-page/404'),
  hidden: true,
},
{
  path: '/401',
  component: () =>
            import ('@/views/error-page/401'),
  hidden: true,
},
{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
                import ('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: { title: 'dashboard', icon: 'dashboard' },
  }],
},
];

export const asyncRoutes = [
  tableRoutes,
  errorRoutes,
  {
    path: '/i18n',
    component: Layout,
    children: [{
      path: 'index',
      component: () =>
                import ('@/views/i18n'),
      name: 'I18n',
      meta: { title: 'i18n', icon: 'international' },
    }],
  }, { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.MIX_LARAVUE_PATH,
  routes: constantRoutes,
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
