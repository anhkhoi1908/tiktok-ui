import React from 'react';
import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

export default function MenuItem({ data, onClick }) {
    const cx = classNames.bind(styles);
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div>
            <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}
