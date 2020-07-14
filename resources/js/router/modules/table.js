import Layout from '@/layout';

const tableRoutes = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Complex Table',
  meta: {
    title: 'table',
    icon: 'table',
  },
  children: [{
    path: 'complex-table',
    component: () =>
            import ('@/views/table/ComplexTable'),
    name: 'ComplexTable',
    meta: { title: 'Table Example' },
  }],
};
export default tableRoutes;
