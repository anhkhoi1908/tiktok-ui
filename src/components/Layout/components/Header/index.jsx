import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

export default function Header() {
    const cx = classNames.bind(styles);

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}></div>
            </header>
        </div>
    );
}
