import { ProjectDetails } from "@/components/data";
import { Badge } from "../badge";

export function Timeline({ details, status }: { details: ProjectDetails; status: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 transition-all border-[1.5px] items-center h-60 sm:h-20  px-2 sm:px-6 py-2 sm:py-0 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50">

      <div className="space-y-0.5">
        <p className="text-sm text-secondary">Timeline</p>
        <p className="text-sm tracking-wide">{details.timeline}</p>
      </div>

      <div className="space-y-0.5">
        <p className="text-sm text-secondary">Role</p>
        <p className="text-sm tracking-wide">{details.role}</p>
      </div>

      <div className="space-y-0.5">
        <p className="text-sm text-secondary">Team</p>
        <p className="text-sm tracking-wide">{details.team}</p>
      </div>

      <div className="space-y-1 sm:space-y-0">
        <p className="text-sm text-secondary">Status</p>
        <Badge variant={`${status === "Live" ? "default" : "outline"}`} className="font-normal leading-tight">
          {status === "Live" ? "Working" : "In Development"}
        </Badge>
      </div>

    </div>
  );
};