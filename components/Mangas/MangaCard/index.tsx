import React from 'react';
import Image from 'next/dist/client/image';
import { Text } from '@nextui-org/react';
import styles from './index.module.scss';
import Router from 'next/router';

interface Props {
    image: string;
    title: string;
    id: number;
}

export default function MangaCard({ image, title, id }: Props) {
    return (
        <div className={styles.mangaCard} onClick={() => Router.push(`/manga/${id}`)}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.bgGradient} />
            <div className={styles.title}>
                <Text size={20} color="#fff">
                    {title}
                </Text>
            </div>
        </div>
    );
}
