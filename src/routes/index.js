import { PageHome } from '~/pages/Home';
import { PageCategories } from '~/pages/Categories';

const publicRoutes = [
    {
        path: '/',
        component: PageHome,
    },

    {
        path: '/categories',
        component: PageCategories,
        layout: null,
    },
];

const privateRouters = [];

export { publicRoutes, privateRouters };
