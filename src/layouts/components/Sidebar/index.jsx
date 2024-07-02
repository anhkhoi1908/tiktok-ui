import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuSidebar, { MenuSidebarItem } from './MenuSidebar';
import config from '../../../config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
} from '../../../components/Icons';
import FollowingAccount from './FollowingAccount';

export default function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <div>
            <aside className={cx('wrapper')}>
                <MenuSidebar>
                    <MenuSidebarItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuSidebarItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuSidebarItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingActiveIcon />}
                    />
                    <MenuSidebarItem
                        title="Friends"
                        to={config.routes.friends}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuSidebarItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </MenuSidebar>
                <FollowingAccount label="Following Accounts" />
            </aside>
        </div>
    );
}
