import { RiMap2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri';
import ContactForm from '../molecules/ContactForm';

export default function ContactBlock() {
    return (
        <section className="bg-card w-full py-9 sm:px-7.5 lg:px-11 xl:py-28 xl:px-20 sm:pt-12 rounded-2xl flex flex-col gap-x-7.5 md:flex-row px-7">
            <div className="w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left mb-5 leading-8">
                    Stuur Ons Een Bericht
                </h3>
                {/* <p className="text-lg mb-5 text-grey-icons text-center md:text-left leading-6">
          Wil je een offerte of een kostenindicatie aanvragen. Ga dan naar
          onze offerteaanvraag pagina. Wij nemen zo snel mogelijk alles met je
          door om een gepaste offerte of kostenplaatje toe te sturen.
        </p> */}
                <ul className="md:mx-0 md:pt-3">
                    <li className="flex items-center mb-6 lg:mb-10">
                        <figure className="bg-dark-icons p-5.5 mr-6.5 inline-block rounded-md">
                            <RiMap2Line className="w-6 h-6 text-grey" />
                        </figure>
                        <a href="https://www.google.nl/maps/place/International+Security+Management+Services+BV/@51.8636647,4.6569798,17z/data=!3m1!4b1!4m5!3m4!1s0x47c42debbaaf7f93:0xc97b8f4afe2721ae!8m2!3d51.8636647!4d4.6591685">
                            <span className="text-lg sm:text-xl font-semibold text-company-blue block">
                                Ons Hoofdkantoor:
                            </span>
                            <span className="text-base text-grey-icons sm:text-xl xl:text-lg">
                                Lelsstraat 2, 2951 VE Alblasserdam
                            </span>
                        </a>
                    </li>
                    <li className="flex items-center mb-6 lg:mb-10">
                        <figure className="bg-dark-icons p-5.5 mr-6.5 inline-block rounded-md">
                            <RiMap2Line className="w-6 h-6 text-grey" />
                        </figure>
                        <a href="https://www.google.nl/maps/place/International+Security+Management+Services+BV/@51.8636647,4.6569798,17z/data=!3m1!4b1!4m5!3m4!1s0x47c42debbaaf7f93:0xc97b8f4afe2721ae!8m2!3d51.8636647!4d4.6591685">
                            <span className="text-lg sm:text-xl font-semibold text-company-blue block">
                                Ons Tweede Kantoor:
                            </span>
                            <span className="text-base text-grey-icons sm:text-xl xl:text-lg">
                                Langesteijn 132, 3342 LG Hendrik-Ido-Ambacht
                            </span>
                        </a>
                    </li>
                    <li className="flex items-center mb-6 lg:mb-10">
                        <figure className="bg-dark-icons p-5.5 mr-6.5 inline-block rounded-md">
                            <RiPhoneLine className="w-6 h-6 text-grey" />
                        </figure>
                        <a href="tel:0850434479">
                            <span className="text-lg sm:text-xl font-semibold text-company-blue block">
                                Telefoon:
                            </span>
                            <span className="text-base text-grey-icons sm:text-xl xl:text-lg">
                                085 043 44 79
                            </span>
                        </a>
                    </li>
                    <li className="flex items-center mb-6">
                        <figure className="bg-dark-icons p-5.5 mr-6.5 inline-block rounded-md">
                            <RiMailLine className="w-6 h-6 text-grey" />
                        </figure>
                        <a href="mailto:info@ismsbv.nl">
                            <span className="text-lg sm:text-xl font-semibold text-company-blue block">
                                Email:
                            </span>
                            <span className="text-base text-grey-icons sm:text-xl xl:text-lg">
                                info@ismsbv.nl
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                <ContactForm />
            </div>
        </section>
    );
}
