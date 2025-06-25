import steps from "@/steps.json";
import Image from "next/image";
import Link from "next/link";

const HowToPlayPage = () => {
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
          How To Play
        </h1>
      </section>

      <main className="mt-20 md:mt-[100px] lg:mt-16">
        <div className="flex flex-col items-center gap-6 px-8 md:gap-8 lg:flex-row">
          {steps.map((step, index) => (
            <StepCard key={step.name} index={index} {...step} />
          ))}
        </div>
      </main>
    </div>
  );
};

interface StepCardProps {
  index: number;
  name: string;
  description: string;
}

const StepCard = ({ index, name, description }: StepCardProps) => (
  <div className="max-w-[680px] items-center gap-10 rounded-[20px] bg-white p-8 md:flex md:px-10 lg:min-h-[550px] lg:w-[384px] lg:flex-col lg:px-12 lg:py-[60px] lg:text-center">
    <p className="heading-l text-blue hidden md:block">0{index + 1}</p>
    <div className="space-y-4 lg:space-y-10">
      <h3 className="heading-m text-dark-navy">
        <span className="text-blue mr-4 md:hidden">0{index + 1}</span>
        {name}
      </h3>
      <p className="body text-[#887DC0]">{description}</p>
    </div>
  </div>
);

export default HowToPlayPage;
