import Image from "next/image";
import Link from "next/link";

export interface iResearch {
  id: string;
  title: string;
  date: string;
  authors: { name: string; email: string }[];
  shortDescription: string;
  longDescription: string;
  imgSrc: string;
  link: string;
}

const Research = ({ id, title, shortDescription, imgSrc }: iResearch) => {
  return (
    <Link
      href={`/researches/${id}`}
      className="group justify-self-center transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h3 className="text-black-1 w-full max-w-96 text-left font-bold italic sm:min-h-[75px] md:min-h-14 lg:min-h-16 lg:text-xl xl:min-h-[85px] 2xl:min-h-14">
          {title}
        </h3>
        <Image
          src={imgSrc}
          alt={title}
          width={392}
          height={320}
          className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <p className="text-gray-1 max-w-96 text-sm lg:text-base">
          {shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default Research;
