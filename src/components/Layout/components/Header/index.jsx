import React, { Children, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Logo from '../../../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMessage,
    faPaperPlane,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem/index';
import Button from '../../../Button/index';
import Menu from '../../../Popper/Menu';
import avatar from '../../../../assets/images/avatar.jpg';
import { MessageIcon, InboxIcon } from '../../../Icons/';
import ImageComponent from '../../../Image/';

export default function Header({ path, d }) {
    const cx = classNames.bind(styles);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vie',
                        title: 'Vietnam',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    // Hanle logic
    const handleOnchange = (menuItem) => {
        console.log(menuItem);
    };

    // Search suggest
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const currentUser = true;

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={Logo} alt="Tiktok" />

                    <HeadLessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>

                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadLessTippy>

                    <div className={cx('actions')}>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Upload
                        </Button>

                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Sign in</Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchange}>
                            {currentUser ? (
                                <ImageComponent className={cx('user-avatar')} src={avatar} alt="Nguyen Van A" />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </div>
    );
}
