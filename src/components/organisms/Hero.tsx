import Link from 'next/link';

const Hero = (props: any) => {
    return (
        <section className="flex flex-col md:flex-row text-center md:text-left md:my-11 md:px-9">
            <div className="mx-10 text-center lg:pr-4">
                <h5 className="text-sm font-semibold text-white mb-2.5">
                    Bridging Services, Securing Satisfaction
                </h5>
                <h1 className="text-2.5 md:text-5.5 font-semibold text-white mb-3.5 px-10 md:px-0 sm:text-3xl md:leading-tight">
                    Uw veelzijdige bondgenoot in dienstverlening
                </h1>
                <p className="text-white px-6 sm:text-lg sm:px-20 md:p-0">
                    Aysa fungeert als een paraplu voor een reeks
                    gespecialiseerde subbedrijven zoals ISMS, Nesa Travel en ESA
                    Service. Of het nu gaat om robuuste beveiligingsoplossingen,
                    memorabele reiservaringen in Turkije of een variëteit aan
                    facilitaire diensten, onze subbedrijven streven ernaar om
                    aan al uw verwachtingen te voldoen en ze zelfs te
                    overtreffen.
                </p>
            </div>
        </section>
    );
};

export default Hero;
