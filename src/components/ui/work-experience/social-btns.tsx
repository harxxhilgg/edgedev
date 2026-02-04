import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

type SocialButtonProps = {
  icon: React.ReactNode;
  url: string;
  label: string;
};

export function SocialButton({ icon, url, label }: SocialButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-secondary cursor-pointer h-5 w-5 hover:bg-transparent"
          onClick={() => window.open(url, "_blank")}
        >
          {icon}
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <TooltipArrow className="fill-primary" />
        <p className="font-semibold">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
