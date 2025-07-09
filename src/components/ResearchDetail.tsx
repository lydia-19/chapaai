import Image from "next/image";
import ResearchList from "./ResearchList";
import Breadcrumb from "./common/Breadcrumb";
import { iResearch } from "./common/Research";
import CalanderIcon from "@icons/Calander";
import PDFIcon from "@/icons/PDF";

const ResearchDetail = ({ research }: { research: iResearch }) => {
  return (
    <div>
      <div className="via-gray-5 to-gray-5/2 bg-gradient-to-b from-white py-10 lg:py-20">
        <div className="container mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "All Research", href: "/all-researches" },
              { label: research.title, href: `/research/${research.id}` },
            ]}
          />
          <h1 className="text-gradient text-center text-2xl leading-normal font-bold lg:text-5xl">
            {research.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-5 py-10 lg:max-w-3xl lg:px-0">
        <p className="text-black-2 mb-10 flex items-center gap-2 text-xs font-bold lg:text-2xl">
          <CalanderIcon />
          {research.date}
        </p>
        <div className="relative h-[476px] w-full">
          <Image
            src={research.imgSrc}
            alt={research.title}
            fill
            className="mx-auto rounded-lg object-cover object-top"
          />
        </div>
        <div className="mt-10">
          <div
            className="prose flex flex-col gap-4 text-xs lg:text-base"
            dangerouslySetInnerHTML={{ __html: research.longDescription }}
          />
        </div>
        <a
          href={research.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 ml-auto flex w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-black/18 px-1 py-1 text-center text-sm font-bold text-black transition-all duration-300 ease-in-out hover:border-gray-400 hover:shadow-lg lg:gap-5"
        >
          <span className="bg-green-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full p-2">
            <PDFIcon />
          </span>
          <span className="mr-2"> Download PDF</span>
        </a>
      </div>
      <div className="bg-gray-5 py-20">
        <div className="container mx-auto">
          <h2 className="text-green-1 text-center text-3xl font-bold lg:text-7xl">
            More Research
          </h2>

          <ResearchList research={research} showTitle={false} showAll={false} />
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
