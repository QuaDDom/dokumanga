import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MangaCard from '../MangaCard';
import styles from './index.module.scss';

export default function MangaGrid() {
    const [mangas, setMangas] = useState<any>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getMangas = async () => {
            try {
                const mangasRes = await axios.get('https://api.jikan.moe/v4/manga');
                const mangasData = mangasRes.data;
                setMangas([...mangasData.data]);
            } catch (err) {
                console.log(err);
            }
        };
        getMangas();
    }, []);

    return (
        <div className={styles.mangas}>
            {mangas &&
                mangas.map(({ title, images }) => (
                    <MangaCard title={title} image={images.jpg.image_url} />
                ))}
        </div>
    );
}
