import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MangaCard from '../MangaCard';
import styles from './index.module.scss';

interface Props {
    url: string;
}

export default function MangaGrid({ url }: Props) {
    const [mangas, setMangas] = useState<any>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getMangas = async () => {
            try {
                const mangasRes = await axios.get(url);
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
                mangas.map(({ title, images, mal_id }) => (
                    <MangaCard title={title} image={images.jpg.image_url} id={mal_id} />
                ))}
        </div>
    );
}
