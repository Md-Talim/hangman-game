import Image from "next/image";
import Link from "next/link";

const PageHeader = ({ title }: { title: string }) => (
  <header className="mt-8 flex items-center justify-between px-8 md:mt-[60px] md:px-12 lg:mt-20">
    <Link
      href="/"
      className="center button-icon aspect-square w-10 rounded-full p-0 md:w-16 lg:w-24"
      aria-label="Go back"
    >
      <Image
        src="/icon-back.svg"
        alt=""
        width={17.5}
        height={16}
        className="h-auto max-w-full md:h-[26px] md:w-[28px] lg:h-[38px] lg:w-[41px]"
        priority
      />
    </Link>
    <h1 className="heading-xl blue-white-gradient text-outline-thick bg-clip-text text-transparent md:mx-auto">
      {title}
    </h1>
  </header>
);

export default PageHeader;
