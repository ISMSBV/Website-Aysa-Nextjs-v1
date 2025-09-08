import Image from 'next/image';

const Header = (props: any) => {
    return (
        <nav className="px-2 sm:px-4 pt-7">
            <div className="container flex flex-wrap items-center justify-center mx-auto">
                <a
                    href="https://www.aysagroup.nl/"
                    className="flex items-center"
                >
                    <Image
                        src="https://aysa.ams3.cdn.digitaloceanspaces.com/aysa-logo-v1.png"
                        width={124}
                        height={40}
                        alt="Aysa Logo"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Header;
