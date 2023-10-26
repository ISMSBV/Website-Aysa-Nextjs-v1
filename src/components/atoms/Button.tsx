import Link from 'next/link';

type ButtonType = {
    title: string;
    link: string;
    className: string;
    target?: string;
};

export default function Button({ title, link, className, target }: ButtonType) {
    return (
        <Link
            href={link}
            className={`bg-company-blue text-white px-8 py-3 rounded font-semibold text-lg ${className}`}
            target={target}
        >
            <span>{title}</span>
        </Link>
    );
}
