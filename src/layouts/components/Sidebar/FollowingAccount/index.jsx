import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import FollowingAccountItem from './FollowingAccountItem';

export default function FollowingAccount({ label }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />
            <FollowingAccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

FollowingAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
