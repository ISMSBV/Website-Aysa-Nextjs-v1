import Image from 'next/image';
import Button from '../atoms/Button';

const Header = (props: any) => {
    return (
        <nav className="px-2 sm:px-4 pt-7">
            <div className="container flex flex-wrap items-center justify-center mx-auto">
                <a href="https://ismsbv.nl" className="flex items-center">
                    <Image
                        src="https://aysa.ams3.cdn.digitaloceanspaces.com/aysa-logo.png"
                        width={124}
                        height={40}
                        alt="ISMS Logo"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Header;
