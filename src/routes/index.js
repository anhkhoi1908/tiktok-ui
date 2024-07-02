import config from '../config';

// Layouts
import { HeaderOnly } from '../layouts';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Live from '../pages/Live';
import Explore from '../pages/Explore';
import Friends from '../pages/Friends';

const publicRoutes = [
    { path: config.routes.home, page: Home },
    { path: config.routes.following, page: Following },
    { path: config.routes.profile, page: Profile },
    { path: config.routes.upload, page: Upload, layout: HeaderOnly },
    { path: config.routes.search, page: Search, layout: null },
    { path: config.routes.live, page: Live },
    { path: config.routes.explore, page: Explore },
    { path: config.routes.friends, page: Friends },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
