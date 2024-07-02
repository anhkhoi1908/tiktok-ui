import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuSidebar, { MenuSidebarItem } from './Menu';
import config from '../../../config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';

export default function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <div>
            <aside className={cx('wrapper')}>
                <MenuSidebar>
                    <MenuSidebarItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuSidebarItem
                        title="Following"
                        to={config.routes.following}
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
            </aside>
        </div>
    );
}
