import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const cx = classNames.bind(styles);

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={Logo} alt="Tiktok" />

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

                    <div className={cx('actions')}></div>
                </div>
            </header>
        </div>
    );
}
