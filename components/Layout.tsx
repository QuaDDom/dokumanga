import React from 'react';
import Nav from './Nav';

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function Layout({ children, title }: Props) {
    return (
        <>
            <Nav />
        </>
    );
}
