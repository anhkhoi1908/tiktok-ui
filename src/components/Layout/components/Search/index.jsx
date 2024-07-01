import React, { useState, useEffect, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faL } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../../../../hooks';
import axios from 'axios';
import * as request from '../../../../utils/request';
import { search } from '../../../../apiService/searchService';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem/index';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { type } from '@testing-library/user-event/dist/type';

export default function SearchComponent() {
    const cx = classNames.bind(styles);

    // Get search value and click delete value
    const [searchValue, setSearchValue] = useState('');

    // Search suggest
    const [searchResult, setSearchResult] = useState([]);

    // When search value loading will run. Dedfault value is false cause start have not search yet
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    // Call API
    useEffect(() => {
        // When each search will show suggest search. Use trim to hide suggest search when search empty string
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

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

    // NOt permit space start searchValue
    const handleChange = (e) => {
        const searchValue = e.target.value;
        // console.log(searchValue);
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {/* Convert searchValue into Boolean */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}
