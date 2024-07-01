import routesConfig from '../config/routes';

// Layouts
import { HeaderOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

const publicRoutes = [
    { path: routesConfig.home, page: Home },
    { path: routesConfig.following, page: Following },
    { path: routesConfig.profile, page: Profile },
    { path: routesConfig.upload, page: Upload, layout: HeaderOnly },
    { path: routesConfig.search, page: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
