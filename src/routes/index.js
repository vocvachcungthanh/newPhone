import { PageHome } from '~/pages/Home';
import { Categories } from '~/pages/Categories';

const publicRoutes = [
    {
        path: '/Home',
        component: PageHome,
    },

    {
        path: '/categories',
        component: Categories,
        layout: null,
    },
];

const privateRouters = [];

export { publicRoutes, privateRouters };
