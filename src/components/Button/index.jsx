import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export default function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const cx = classNames.bind(styles);

    const props = {
        onClick,
        ...passProps,
    };

    // Variable
    let Comp = 'button';
    const classes = cx('wrapper', { [className]: className, primary, outline, large, text, disabled, rounded });

    // Remove envet listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props.key;
            }
        });
    }

    // Link noi bo va link ngoai
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <div>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('iconBtn')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('iconBtn')}>{rightIcon}</span>}
            </Comp>
        </div>
    );
}
