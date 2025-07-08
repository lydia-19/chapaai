import Image from "next/image";

import NeuralNetwork from "@animations/NeuralNetwork";
import FloatingParticles from "@animations/FloatingParticles";

const Intro = () => {
  return (
    <div className="via-gray-5 to-gray-5/2 neural-bg relative overflow-hidden bg-gradient-to-b from-white py-10 lg:py-0 xl:h-[calc(100vh-88px)] 2xl:h-auto 2xl:py-36">
      <NeuralNetwork />
      <FloatingParticles />

      <div className="relative z-10 h-full px-4 md:px-10 lg:px-24">
        <div className="mx-auto h-full max-w-screen-2xl">
          <div className="flex h-full flex-col justify-center max-xl:gap-6">
            <div className="relative flex items-center justify-center md:py-10 xl:py-4">
              <div className="flex-1/2 md:flex-4/5">
                <div className="xl-2:left-[52%] absolute top-0 left-[53%] aspect-square w-32 rounded-full backdrop-blur-[2px] md:left-[57%] md:w-72 md:backdrop-blur-xs lg:left-[53%] lg:w-96 xl:left-[58%] 2xl:w-xl"></div>
                <h1 className="text-gradient 3xl:text-[150px] text-4xl !leading-[115%] font-bold tracking-tight whitespace-nowrap sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[117px] 2xl:text-[126px]">
                  Explore Chapa&apos;s <br /> AI Research <br /> Library
                </h1>
              </div>
              <div className="flex-1/2 md:flex-1/5">
                <div className="3xl:w-[550px] xl-2:w-[450px] relative aspect-square w-[100px] flex-shrink-0 flex-grow-1 sm:w-[200px] md:w-[250px] lg:w-[380px] 2xl:w-[500px]">
                  <Image
                    src="/images/logo-sm.svg"
                    alt="intro"
                    fill
                    priority
                    className="xl-2:-ml-[15%] object-contain 2xl:-ml-[10%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="max-w-36 text-xs text-black lg:max-w-72 lg:text-2xl">
                Collaborative Research. Real-World Impact. Future Solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
