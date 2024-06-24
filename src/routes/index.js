// Layouts
import { HeaderOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

const publicRoutes = [
    { path: '/', page: Home },
    { path: '/following', page: Following },
    { path: '/upload', page: Upload, layout: HeaderOnly },
    { path: '/profile', page: Profile },
    { path: '/search', page: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
