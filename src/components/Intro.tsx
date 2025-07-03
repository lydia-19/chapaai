import Image from "next/image";

const Intro = () => {
  return (
    <div className="via-gray-5 to-gray-5/2 bg-gradient-to-b from-white py-10 lg:py-0 xl:h-[calc(100vh-88px)] 2xl:h-auto 2xl:py-36">
      <div className="container mx-auto flex h-full flex-col justify-center px-5 xl:px-0">
        <div className="relative flex items-center justify-center py-10 lg:py-14">
          <h1 className="text-gradient text-3xl font-bold md:text-5xl lg:text-[117px] lg:leading-[115%]">
            Explore Chapa&apos;s AI Research Library
          </h1>
          <div className="relative h-[76px] w-[112px] flex-shrink-0 flex-grow-1 md:h-[240px] md:w-[300px] lg:h-[300px] lg:w-[445px]">
            <Image
              src="/images/logo-sm.svg"
              alt="intro"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="max-w-36 text-xs text-black lg:max-w-72 lg:text-2xl">
            Collaborative Research. Real-World Impact. Future solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
