import Image from "next/image";
import Button from "./common/Button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-black-2">
      <div className="px-4 py-10 md:px-10 lg:px-24 2xl:py-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-32">
            <div className="order-2 flex max-w-lg flex-col items-center gap-6 lg:order-1 lg:items-start">
              <p className="text-center text-2xl font-bold text-white lg:text-left lg:text-5xl">
                Ready to contact with us and read more?
              </p>
              <p className="text-center text-sm text-white lg:text-left lg:text-base">
                Chapa AI Research is at the forefront of artificial
                intelligence, unlocking predictive power for financial
                institutions and driving innovation across diverse fields.
              </p>
              <Button className="w-max">
                <Link href="https://chapa.co/contact" target="_blank">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className="relative order-1 h-[76px] w-[134px] flex-shrink-0 flex-grow-1 lg:order-2 lg:h-[160px] lg:w-[276px]">
              <Image
                src="/images/logo.svg"
                alt="intro"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
