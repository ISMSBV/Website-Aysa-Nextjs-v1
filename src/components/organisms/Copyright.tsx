import Image from 'next/image';

export default function Copyright(props: any) {
    const images = [
        {
            url: 'https://aysa.ams3.cdn.digitaloceanspaces.com/nest-logo.webp',
        },
        { url: 'https://cdn.ismsbv.online/images/esa.jpg' },
        {
            url: 'https://cdn.ismsbv.online/images/logo.png',
        },
    ];

    return (
        <div>
            <div className="container text-center text-xs p-3.75 sm:p-8 sm:text-sm md:text-base text-grey border-t border-t-grey">
                <p>Copyright © 2023 AYSA B.V. Alle rechten voorbehouden.</p>
            </div>
        </div>
    );
}
