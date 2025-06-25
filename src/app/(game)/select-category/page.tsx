import PageHeader from "@/components/page-header";
import words from "@/words.json";
import Link from "next/link";

const SelectCategoryPage = () => {
  return (
    <div className="mx-auto lg:max-w-[1216px]">
      <PageHeader title="Pick a category" />

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
