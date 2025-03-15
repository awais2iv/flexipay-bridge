
import { cn } from "@/lib/utils";

type ComparisonItem = {
  application: string;
  weakness: string;
  solution: string;
};

type ComparisonTableProps = {
  data: ComparisonItem[];
  className?: string;
};

export const ComparisonTable = ({ data, className }: ComparisonTableProps) => {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-flexipay-primary text-white">
            <th className="p-3 text-left border border-blue-400 font-semibold">Existing Application</th>
            <th className="p-3 text-left border border-blue-400 font-semibold">Weakness</th>
            <th className="p-3 text-left border border-blue-400 font-semibold">Proposed Solution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              key={index} 
              className={cn(
                "transition-colors hover:bg-blue-50",
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              )}
            >
              <td className="p-3 border border-slate-300 font-medium">{item.application}</td>
              <td className="p-3 border border-slate-300">{item.weakness}</td>
              <td className="p-3 border border-slate-300">{item.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
