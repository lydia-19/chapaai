import Image from "next/image";

const Intro = () => {
  return (
    <div className="via-gray-5 to-gray-5/2 bg-gradient-to-b from-white py-10 lg:py-0 xl:h-[calc(100vh-88px)] 2xl:h-auto 2xl:py-36">
      <div className="h-full px-4 md:px-10 lg:px-24">
        <div className="mx-auto h-full max-w-screen-2xl">
          <div className="flex h-full flex-col justify-center">
            <div className="relative flex items-center justify-center md:py-10 lg:py-14">
              <div className="flex-4/5">
                <h1 className="text-gradient text-3xl font-bold whitespace-nowrap md:text-5xl lg:text-7xl lg:leading-[115%] xl:text-[117px]">
                  Explore Chapa&apos;s <br /> AI Research <br /> Library
                </h1>
              </div>
              <div className="flex-1/5">
                <div className="relative h-[76px] w-[80px] flex-shrink-0 flex-grow-1 md:h-[240px] md:w-[300px] lg:h-[300px] lg:w-[445px]">
                  <Image
                    src="/images/logo-sm.svg"
                    alt="intro"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="max-w-36 text-xs text-black lg:max-w-72 lg:text-2xl">
                Collaborative Research. Real-World Impact. Future solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
