
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ModuleCardProps = {
  title: string;
  features: string[];
  className?: string;
  icon?: ReactNode;
  team?: string;
};

export const ModuleCard = ({ title, features, className, icon, team }: ModuleCardProps) => {
  return (
    <div className={cn(
      "bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex flex-col items-center mb-3">
        {icon && <div className="mb-2">{icon}</div>}
        <h3 className="font-semibold text-flexipay-primary text-center">{title}</h3>
      </div>
      <ul className="text-sm space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-flexipay-secondary mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {team && (
        <div className="mt-3 pt-2 border-t border-slate-100">
          <p className="text-xs text-gray-500"><span className="font-medium">Assigned to:</span> {team}</p>
        </div>
      )}
    </div>
  );
};
