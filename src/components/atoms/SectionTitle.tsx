import Link from "next/link";

type SectionTitleType = {
  title: string;
  description: string;
};

export default function SectionTitle({ title, description }: SectionTitleType) {
  return (
    <div className="text-white text-center mb-6 md:mb-10 w-full block">
      <h2 className="text-xl md:text-3xl font-semibold tracking-tighter mb-5">
        {title}
      </h2>
      <p className="text-base font-normal">{description}</p>
    </div>
  );
}
