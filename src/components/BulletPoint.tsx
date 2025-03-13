
import { cn } from "@/lib/utils";

type BulletPointProps = {
  children: React.ReactNode;
  className?: string;
};

export const BulletPoint = ({ children, className }: BulletPointProps) => {
  return (
    <div className={cn("flex items-start mb-2 animate-slide-in", className)}>
      <div className="min-w-[8px] h-[8px] rounded-full bg-flexipay-accent mt-2 mr-3"></div>
      <div>{children}</div>
    </div>
  );
};
