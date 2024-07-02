import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';

export default function MenuSidebarItem({ title, to, icon, activeIcon }) {
    const cx = classNames.bind(styles);
    return (
        <div>
            <NavLink to={to} className={(nav) => cx('menu-sidebar-item', { active: nav.isActive })}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('active-icon')}>{activeIcon}</span>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </div>
    );
}

MenuSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
