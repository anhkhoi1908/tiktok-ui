import React, { Children, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

export default function Menu({ children, items = [], onChange }) {
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

    return (
        <div>
            <Tippy
                delay={[0, 700]}
                offset={[12, 8]}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <HeaderMenu
                                    title="Languages"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </div>
    );
}
