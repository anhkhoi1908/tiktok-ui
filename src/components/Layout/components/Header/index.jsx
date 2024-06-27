import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Logo from '../../../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem/index';
import Button from '../../../Button/index';

export default function Header() {
    const cx = classNames.bind(styles);

    // Search suggest
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={Logo} alt="Tiktok" />

                    <Tippy
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
                    </Tippy>

                    <div className={cx('actions')}>
                        <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Upload
                        </Button>
                        <Button primary>Sign in</Button>
                    </div>
                </div>
            </header>
        </div>
    );
}
