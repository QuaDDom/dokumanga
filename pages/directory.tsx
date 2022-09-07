import React from 'react';
import Layout from '../components/Layout';
import { Input, Text } from '@nextui-org/react';
import styles from '../styles/directory.module.scss';
import Grid from '../components/Mangas/MangaGrid';
import MangaGrid from '../components/Mangas/MangaGrid';
import { FiSearch } from 'react-icons/fi';

export default function Directory() {
    return (
        <Layout title="Directory - Dokumanga">
            <div className={`${styles.directoryContainer} page`}>
                <Text size={35} weight="bold" className="title">
                    Directory
                </Text>
                <div className={styles.inputContainer}>
                    <Input
                        clearable
                        className={styles.input}
                        placeholder="Search"
                        contentLeft={<FiSearch style={{ fontSize: '50px' }} />}
                        width="50vw"
                        size="xl"
                        color="secondary"
                        contentRight={<></>}
                    />
                </div>
                <MangaGrid url="https://api.jikan.moe/v4/manga" />
            </div>
        </Layout>
    );
}
