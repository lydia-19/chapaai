import Link from "next/link";
import ChevronRightIcon from "@/icons/ChevronRight";

const Breadcrumb = ({
  items,
}: {
  items: {
    label: string;
    href: string;
  }[];
}) => {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 text-xs font-bold lg:text-base"
        >
          {item.label}
          {item.href !== items[items.length - 1].href && <ChevronRightIcon />}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
