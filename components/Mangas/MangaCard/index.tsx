import React from 'react';
import Image from 'next/dist/client/image';
import { Text } from '@nextui-org/react';
import styles from './index.module.scss';

interface Props {
    image: string;
    title: string;
}

export default function MangaCard({ image, title }: Props) {
    return (
        <div className={styles.mangaCard}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.bgGradient} />
            <div className={styles.title}>
                <Text size={20}>{title}</Text>
            </div>
        </div>
    );
}
