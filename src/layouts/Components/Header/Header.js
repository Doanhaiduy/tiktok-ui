import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import config from '~/config/';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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
                    code: 'vi',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Ελληνικά (Ελλάδα)',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'עברית (ישראל)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'हिंदी',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Magyar (Magyarország)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: '日本語（日本）',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: '한국어 (대한민국)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Nederlands (Nederland)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Polski (Polska)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Português (Brasil)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Română (Romania)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Русский (Россия)',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Svenska (Sverige)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'ไทย (ไทย)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Türkçe (Türkiye)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Українська (Україна)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'اردو',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: '简体中文',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: '繁體中文',
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
        title: 'Keyboard shortcut',
    },
];
function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile/doanhaiduy03',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messenger" placement="bottom" offset={[0, 12]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_dc36609034f68f6629bb59bdfb4d10f3.jpeg?from=2956013662"
                                alt="avatar"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1681444800&x-signature=JhjjVJIhmDx7ErebOXpNE6pA%2F1c%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
