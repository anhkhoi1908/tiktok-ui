import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <div>
            <aside className={cx('wrapper')}>
                <h2>Sidebar</h2>
            </aside>
        </div>
    );
}
