import PageTitle from "@/components/atoms/PageTitle";
import WhatWeOffer from "@/components/organisms/WhatWeOffer";

export default function Services() {
  const services = [
    {
      title: "Objectbeveiliging",
      description:
        "Objectbeveiliging beschermt waardevolle objecten tegen dreigingen door middel van fysieke beveiliging, monitoring en toegangscontrole.",
      learnMoreLink: "/services/object-security",
    },
    {
      title: "Vluchtelingen Opvang",
      description:
        "Vluchtelingenopvangbeveiliging waarborgt veiligheid door toezicht, beveiliging en controle van bezoekers en omgeving in opvangcentra.",
      learnMoreLink: "/services/refugee-center",
    },
    {
      title: "Receptie Diensten",
      description:
        "Receptiebeveiliging waarborgt de veiligheid door toegangscontrole en bewaking. Beperkt toegang tot geautoriseerde personen.",
      learnMoreLink: "/services/reception-services",
    },
    {
      title: "Honden Beveiliging",
      description:
        "Getrainde beveiligingshonden verhogen de veiligheid en voorkomen ongeoorloofde activiteiten in hondenbeveiliging.",
      learnMoreLink: "/services/dog-security",
    },
    {
      title: "Camera Toezicht",
      description:
        "Camera toezicht verbetert beveiliging door real-time waarneming, opname en nauwkeurig onderzoek van incidenten.",
      learnMoreLink: "/services/camera-surveillance",
    },
    {
      title: "Transport Beveiliging",
      description:
        "Transport beveiliging biedt begeleiding en veiligheid tijdens vervoer. Gebruiken geavanceerde technieken.",
      learnMoreLink: "/services/security-escort",
    },
    {
      title: "Havenbeveiliging",
      description:
        "Beveiliging in havens via controles, surveillance en crisisbeheersing voor de veiligheid van schepen, goederen en mensen.",
      learnMoreLink: "/services/port-security",
    },
    {
      title: "Waardetransport",
      description:
        "Waardetransportbeveiliging beschermt waardevolle goederen met beveiligingsmaatregelen, waaronder bewapende escorte en GPS-volging.",
      learnMoreLink: "/services/security-transport",
    },
    {
      title: "Evenementen Beveiliging",
      description:
        "Evenementenbeveiliging zorgt voor veiligheid tijdens evenementen door middel van toegangscontrole, beveiligingspersoneel, etc.",
      learnMoreLink: "/services/event-security",
    },
  ];

  return (
    <>
      <PageTitle
        title="Over Diensten"
        description="Onze dienstenpagina toont de diensten die we aanbieden, lees hierover voor meer informatie."
        pageTitle="services"
      />
      <WhatWeOffer list={services} />
    </>
  );
}
