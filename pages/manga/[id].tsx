import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Text } from '@nextui-org/react';
import Layout from '../../components/Layout';
import axios from 'axios';
import styles from '../../styles/manga.module.scss';

export default function Manga() {
    const [manga, setManga] = useState<any>(null);
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        const getManga = async () => {
            try {
                const mangaRes = await axios.get(`https://api.jikan.moe/v4/manga/${id}`);
                const mangaData = await mangaRes.data;
                setManga(mangaData.data);
            } catch (err) {
                console.log(err);
            }
        };
        getManga();
    }, []);

    useEffect(() => {
        console.log(manga);
        console.log(id);
    }, [manga, id]);

    return (
        <Layout title={`Manga - Dokumanga`}>
            {manga && (
                <div className={`${styles.mangaContainer} page`}>
                    <div className={styles.intro}>
                        <div className={styles.image}>
                            <img src={manga.images.jpg.image_url} alt={manga.title} />
                        </div>
                        <div className={styles.info}>
                            <Text size={33} weight="bold">
                                {manga.title}
                            </Text>
                            <Text size={22} weight="semibold">
                                Status: {manga.status}
                            </Text>
                            <Text size={22} weight="semibold">
                                Chapters: {`${manga.chapters || 'In progress'}`}
                            </Text>
                            <Text size={18}>{manga.synopsis}</Text>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
