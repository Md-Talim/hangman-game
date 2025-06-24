import clsx from "clsx";
import { ComponentProps } from "react";

export const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx(
        "navy-blue-gradient card-shadow mx-auto grid w-[324px] justify-items-center gap-[43px] rounded-[48px] py-16 md:w-[592px] md:gap-12",
        className,
      )}
      {...props}
    />
  );
};

export const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={clsx("relative -mt-28 md:-mt-32", className)} {...props} />
);

export const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={clsx("grid justify-items-center gap-[34px]", className)}
    {...props}
  />
);
