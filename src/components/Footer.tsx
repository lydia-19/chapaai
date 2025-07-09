import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black-2">
      <div className="px-4 md:px-10 lg:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row lg:py-14">
            <p className="text-gray-4 text-xs lg:text-lg">
              Copyright © chapa {new Date().getFullYear()}
            </p>
            <ul className="flex gap-8">
              <li className="text-gray-4 hover:text-gray-3 text-xs lg:text-lg">
                <Link
                  href="https://chapa.co/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </Link>
              </li>
              <li className="text-gray-4 hover:text-gray-3 text-xs lg:text-lg">
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
      </div>
    </div>
  );
};

export default Footer;
