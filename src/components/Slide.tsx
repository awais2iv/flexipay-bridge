
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SlideProps = PropsWithChildren<{
  title: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}>;

export const Slide = ({ 
  title, 
  children, 
  className, 
  titleClassName, 
  contentClassName 
}: SlideProps) => {
  return (
    <div className={cn(
      "min-h-[75vh] flex flex-col p-6 md:p-10 bg-white rounded-lg shadow-md animate-fade-in",
      className
    )}>
      <h2 className={cn(
        "text-2xl md:text-3xl font-bold mb-4 text-flexipay-primary border-b-2 border-flexipay-accent pb-2",
        titleClassName
      )}>
        {title}
      </h2>
      <div className={cn("flex-1 overflow-auto", contentClassName)}>
        {children}
      </div>
    </div>
  );
};
