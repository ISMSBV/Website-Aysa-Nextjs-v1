import Image from "next/image";

export default function FourOhFour() {
  return (
    <section className="flex items-center justify-center py-[20%]">
      <Image
        src="https://cdn.ismsbv.online/images%2Ferror-404-page-3100479-2583000.png"
        width={600}
        height={600}
        alt="404 Afbeelding"
      />
    </section>
  );
}
