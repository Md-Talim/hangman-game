import words from "@/words.json";
import Image from "next/image";
import Link from "next/link";

const SelectCategoryPage = () => {
  return (
    <div className="mx-auto lg:max-w-[1216px]">
      <section className="mt-8 flex items-center justify-between px-8 md:mt-[60px] md:px-12 lg:mt-20">
        <Link
          href="/"
          className="center button-icon aspect-square w-10 rounded-full p-0 md:w-16 lg:w-24"
          aria-label="Play game"
        >
          <Image
            src="/icon-back.svg"
            alt="Play icon"
            width={17.5}
            height={16}
            className="h-auto max-w-full lg:h-[26px] lg:w-[28px]"
            priority
          />
        </Link>
        <h1 className="heading-xl blue-white-gradient text-outline-thick bg-clip-text text-transparent md:mx-auto">
          Pick a Category
        </h1>
      </section>

      <main className="mt-20 md:mt-[100px] lg:mt-[155px]">
        <div className="grid gap-4 px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {Object.keys(words.categories).map((category) => (
            <Link
              key={category}
              href={`/play?category=${encodeURIComponent(category)}`}
              className="heading-m navy-blue-shadow bg-blue center h-[77px] rounded-[20px] md:h-[182px] md:max-w-[382px] md:rounded-[40px] lg:h-[190px]"
            >
              {category}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SelectCategoryPage;
