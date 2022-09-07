import React from 'react';
import Layout from '../components/Layout';
import { Text } from '@nextui-org/react';
import styles from '../styles/directory.module.scss';
import Grid from '../components/Mangas/MangaGrid';

export default function Directory() {
    return (
        <Layout title="Directory - Dokumanga">
            <div className={`${styles.directoryContainer} page`}>
                <Text>Directory</Text>
            </div>
        </Layout>
    );
}
