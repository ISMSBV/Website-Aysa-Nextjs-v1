import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import { RiLinkedinBoxFill, RiPlayMiniFill } from 'react-icons/ri';

export default function Footer(props: any) {
    const columns = [
        {
            title: 'Diensten',
            links: [
                {
                    link: '/services/object-security',
                    name: 'Object Beveiliging',
                },
                {
                    link: '/services/refugee-center',
                    name: 'Vluchtelingen Opvang',
                },
                {
                    link: '/services/reception-services',
                    name: 'Receptie Diensten',
                },
                {
                    link: '/services/event-security',
                    name: 'Evenementen Beveiliging',
                },
                {
                    link: '/services/port-security',
                    name: 'Haven Beveiliging',
                },
                {
                    link: '/services/security-transport',
                    name: 'Transport Beveiliging',
                },
            ],
        },
        {
            title: 'Algemeen',
            links: [
                {
                    link: 'https://cdn.ismsbv.online/Algemene-Voorwaarden.pdf',
                    name: 'Algemene Voorwaarden',
                    target: '_blank',
                },
                {
                    link: 'https://cdn.ismsbv.online/Klachtenregelement.pdf',
                    name: 'Klachtenregelement',
                    target: '_blank',
                },
                {
                    link: '/quality-and-certifications',
                    name: 'Kwaliteit en Certificeringen',
                    target: '_self',
                },
                {
                    link: 'https://cdn.ismsbv.online/Privacyverklaring.pdf',
                    name: 'Privacyverklaring',
                    target: '_blank',
                },
                {
                    link: 'https://cdn.ismsbv.online/Privacyverklaring-Cameratoezicht.pdf',
                    name: 'Privacyverklaring Cameratoezicht',
                    target: '_blank',
                },
            ],
        },
    ];

    return (
        <footer className="grid md:grid-cols-2 lg:grid-cols-4 gap-7.5 mt-16 text-center">
            <div className="flex lg:mb-12 flex-col items-center">
                <a
                    href="https://ismsbv.nl"
                    className="flex items-center mb-2.5"
                >
                    <Image
                        src="https://aysa.ams3.cdn.digitaloceanspaces.com/aysa-logo.png"
                        width={138}
                        height={40}
                        alt="ISMS Logo"
                    />
                </a>
                <p className="text-grey ml-3.75 text-sm sm:text-base text-center leading-6 mb-5">
                    Aysa is een vooruitstrevende en diverse holding die een
                    scala aan diensten biedt via haar gespecialiseerde
                    subbedrijven.
                </p>
                <a
                    href="https://www.linkedin.com/company/aysa-group/"
                    aria-label="LinkedIn"
                    className=" md:ml-3.75"
                >
                    <span className="w-7 h-7 bg-card flex items-center justify-center rounded-full">
                        <RiLinkedinBoxFill className="w-5 h-5 text-white" />
                    </span>
                </a>
            </div>
            {/* {cos */}
            <ul className="">
                <li>
                    <h2 className="mb-6 text-xl font-semibold text-grey-icons">
                        Neem contact op
                    </h2>
                </li>
                <li className="mb-2">
                    <a href="mailto:info@aysagroup.nl" className="text-grey">
                        <span className="text-company-blue font-bold text-base mr-1">
                            Email:
                        </span>
                        info@aysagroup.nl
                    </a>
                </li>
                <li className="mb-2">
                    <a href="tel:0850434479" className="text-grey">
                        <span className="text-company-blue font-bold text-base mr-1">
                            Phone:
                        </span>
                        085 043 44 79
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href="https://www.google.nl/maps/place/International+Security+Management+Services+BV/@51.8636647,4.6569798,17z/data=!3m1!4b1!4m5!3m4!1s0x47c42debbaaf7f93:0xc97b8f4afe2721ae!8m2!3d51.8636647!4d4.6591685"
                        className="text-grey"
                        target="_blank"
                    >
                        <span className="text-company-blue font-bold text-base mr-1">
                            Hoofdkantoor:
                        </span>
                        Langesteijn 132, 3342LG Alblasserdam Hendrik-Ido-Ambacht
                    </a>
                </li>
                <li className="mb-10">
                    <span className="text-grey">
                        <span className="text-company-blue font-bold text-base mr-1">
                            KVK:
                        </span>
                        77279859
                    </span>
                </li>
            </ul>
        </footer>
    );
}
