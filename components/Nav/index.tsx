import React from 'react';
import { Button, Modal, Text, useModal, Link, Avatar } from '@nextui-org/react';
import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import styles from './index.module.scss';

export default function Nav() {
    const { setVisible, bindings } = useModal();
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Text size={35} weight="bold">
                    漫画
                </Text>
                <Text size={30} weight="bold">
                    Dokumanga
                </Text>
            </div>
            <div className={styles.options}>
                <Link className={styles.option} href="/">
                    Home
                </Link>
                <Link className={styles.option} href="/directory">
                    Directory
                </Link>
                <Link className={styles.option} href="/home">
                    Last Releases
                </Link>
                <Switch
                    className={styles.option}
                    data-cursor-size="80px"
                    color="primary"
                    checked={isDark}
                    iconOn={<BsMoonFill />}
                    iconOff={<BsSunFill />}
                    onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
                />
                <div className={styles.profile}>
                    <Avatar
                        src="https://64.media.tumblr.com/13270cf842c4fcf8f99d24bb3051ed8c/31119862e37169f4-a0/s400x600/4587531bf50b6b52416c9b3e6adb455561c134e3.jpg"
                        size="md"
                    />
                </div>
            </div>
        </div>
    );
}
