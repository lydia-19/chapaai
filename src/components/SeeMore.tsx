import Button from "@components/common/Button";
import Link from "next/link";

const SeeMore = () => {
  return (
    <div className="from-gray-3/27 to-gray-3 bg-gradient-to-b py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-black-2 text-center text-2xl font-bold lg:text-7xl">
          Dive Deeper into
          <br /> Our <span className="text-green-1">Research</span>
        </p>
        <Button className="lg:text-md text-sm font-bold lg:px-10 lg:text-sm">
          <Link href="/all-researches" className="">
            See More Researches
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SeeMore;
