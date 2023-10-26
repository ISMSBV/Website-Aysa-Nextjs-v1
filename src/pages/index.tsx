import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/organisms/Hero';
import CompanyLogos from '@/components/organisms/CompanyLogos';
import WhatWeOffer from '@/components/organisms/WhatWeOffer';

const inter = Inter({ subsets: ['latin'] });

const services = [
    {
        logo: 'https://cdn.ismsbv.online/images/logo.png',
        website: 'https://ismsbv.nl',
    },
    {
        logo: 'https://aysa.ams3.cdn.digitaloceanspaces.com/nest-logo.webp',
        website: 'https://www.nesatravel.com/',
    },
    {
        logo: 'https://cdn.ismsbv.online/images/esa.jpg',
        website: 'https://www.esaeventbv.nl/',
    },
];

export default function Home() {
    return (
        <>
            <Hero />
            <WhatWeOffer list={services} />
        </>
    );
}
