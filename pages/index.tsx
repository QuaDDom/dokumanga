import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Text } from '@nextui-org/react';
import styles from '../styles/index.module.scss';

export default function Home() {
    return (
        <Layout title="Directory - Dokumanga">
            <div className={`${styles.homeContainer} page`}>
                <Text>Home</Text>
            </div>
        </Layout>
    );
}
