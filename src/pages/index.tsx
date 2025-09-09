import Hero from '@/components/organisms/Hero';
import WhatWeOffer from '@/components/organisms/WhatWeOffer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const services = [
    {
        logo: 'https://cdn.prod.website-files.com/682b31e2c3aa4d0d53f01232/683429b43af6faa453da0f94_isms%20256x256.svg',
        website: 'https://ismsbv.nl',
    },
    {
        logo: 'https://cdn.prod.website-files.com/682b31e2c3aa4d0d53f01232/68bfe9b178998cb01ea1755f_nesa-travel-white.png',
        website: 'https://www.nesatravel.com/',
    },
    {
        logo: 'https://cdn.prod.website-files.com/682b31e2c3aa4d0d53f01232/68bee603f197a123cdcaf4a3_horizontal_on_transparent_by_logaster_pn.avif',
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
