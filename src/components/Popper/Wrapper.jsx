import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

export default function Wrapper({ children, className }) {
    const cx = classNames.bind(styles);

    return <div className={cx('wrapper', className)}>{children}</div>;
}
