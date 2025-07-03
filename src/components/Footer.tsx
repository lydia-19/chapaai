import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black-2">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row lg:py-14 2xl:px-0">
        <p className="text-gray-4 text-xs lg:text-xl">
          Copyright © chapa {new Date().getFullYear()}
        </p>
        <ul className="flex gap-8">
          <li className="text-gray-4 text-xs lg:text-xl">
            <Link
              href="https://chapa.co/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </Link>
          </li>
          <li className="text-gray-4 text-xs lg:text-xl">
            <Link
              href="https://chapa.co/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & condition
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
