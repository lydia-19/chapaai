import Image from "next/image";
import Link from "next/link";

export interface iResearch {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  imgSrc: string;
  link: string;
}

const Research = ({ id, title, shortDescription, imgSrc }: iResearch) => {
  return (
    <Link
      href={`/researches/${id}`}
      className="justify-self-center transition-all duration-300 ease-in-out hover:scale-102"
    >
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h3 className="text-black-1 w-full text-left text-xl font-bold italic">
          {title}
        </h3>
        <Image
          src={imgSrc}
          alt={title}
          width={392}
          height={320}
          className="rounded-lg object-contain"
        />
        <p className="text-gray-1 max-w-96 text-sm lg:text-base">
          {shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default Research;
