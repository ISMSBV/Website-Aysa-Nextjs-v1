import { RiArrowRightSLine, RiChromeFill } from 'react-icons/ri';
import Link from 'next/link';
import SectionTitle from '../atoms/SectionTitle';
import Button from '../atoms/Button';

const WhatWeOffer = ({
    title,
    description,
    list,
}: {
    title?: string;
    description?: string;
    list: any;
}) => {
    return (
        <div>
            {title && description && (
                <SectionTitle title={title} description={description} />
            )}
            <section className="flex mb-14">
                <ul className="grid grid-col-1s md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
                    {list.map((item: any, index: number) => (
                        <li
                            key={index}
                            className="w-full flex flex-col items-center justify-center px-15 py-7 rounded bg-card text-center border-b-4 border-b-card hover:border-b-company-blue transition group"
                        >
                            {/* <div className="inline-block bg-dark-icons py-2.5 px-3.5 rounded-md mb-5 group-hover:bg-company-blue transition">
                <RiChromeFill className="w-12 h-12 text-grey-icons group-hover:text-white transition" />
              </div> */}
                            <h2 className="text-xl font-bold text-grey-icons pb-3 group-hover:text-white transition">
                                {item?.title}
                            </h2>
                            <img src={item?.logo} />
                            {item?.website && (
                                <Button
                                    title="Naar Website"
                                    link={item?.website}
                                    className="hidden lg:inline-block mt-8"
                                    target="_blank"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default WhatWeOffer;
