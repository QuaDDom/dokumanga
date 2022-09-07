import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Text } from '@nextui-org/react';
import styles from '../styles/index.module.scss';
import MangaGrid from '../components/Mangas/MangaGrid';

export default function Home() {
    return (
        <Layout title="Directory - Dokumanga">
            <div className={`${styles.homeContainer} page`}>
                <Text size={35} weight="bold" className="title">
                    Popular Mangas
                </Text>
                <MangaGrid url="https://api.jikan.moe/v4/manga" />
            </div>
        </Layout>
    );
}
