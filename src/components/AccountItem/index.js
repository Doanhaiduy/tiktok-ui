import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_dc36609034f68f6629bb59bdfb4d10f3.jpeg?from=2956013662"
                // src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    {data.id % 2 === 0 && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
