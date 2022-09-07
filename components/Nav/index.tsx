import React from 'react';
import { Link, Text, Avatar } from '@nextui-org/react';
import styles from './index.module.scss';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Text size={35}>漫画</Text>
                <Text size={30}>Dokumanga</Text>
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
