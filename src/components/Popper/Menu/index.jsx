import React, { Children, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import PropTypes from 'prop-types';

export default function Menu({ children, items = [], onChange, hideOnClick = false }) {
    const cx = classNames.bind(styles);

    // Lấy phần tử cuối mảng vì trang nhất luôn là phần tử cuối mảng. Current đang là biến đặt cho trang đầu tiên
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            // Check xem có children hay không. Convert sang boolean bằng dấu !!. Có thì true, không có thì false
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Back menu
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    // Render menu
    const renderResult = (attrs) => {
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>;
    };

    // Reset về trang đầu tiên của page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div>
            <Tippy
                delay={[0, 700]}
                offset={[12, 8]}
                hideOnClick={hideOnClick}
                interactive
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetMenu}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
