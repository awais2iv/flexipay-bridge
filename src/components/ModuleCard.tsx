
import { cn } from "@/lib/utils";

type ModuleCardProps = {
  title: string;
  features: string[];
  className?: string;
};

export const ModuleCard = ({ title, features, className }: ModuleCardProps) => {
  return (
    <div className={cn(
      "bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <h3 className="font-semibold text-flexipay-primary mb-2">{title}</h3>
      <ul className="text-sm space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-flexipay-secondary mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
