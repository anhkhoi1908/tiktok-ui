import React, { useState, useEffect, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem/index';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

export default function SearchComponent() {
    const cx = classNames.bind(styles);

    // Get search value and click delete value
    const [searchValue, setSearchValue] = useState('');

    // Search suggest
    const [searchResult, setSearchResult] = useState([]);

    // When search value loading will run. Dedfault value is false cause start have not search yet
    const [loading, setLoading] = useState(false);

    // Call API
    useEffect(() => {
        // When each search will show suggest search. Use trim to hide suggest search when search empty string
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    // When click delete input search, focus input by useRef
    const inputRef = useRef();

    // Hanlde clear search input
    const handleClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    // Show suggest search. Set value default is true because first search always show
    const [showResult, setShowResult] = useState(true);

    // Hide suggest search when click outside
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadLessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    {/* Convert searchValue into Boolean */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}
