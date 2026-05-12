import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { CircleHalfIcon } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full cursor-pointer active:scale-90"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <div className={`transition-all duration-300 ${isDark ? "rotate-0 opacity-85" : "rotate-180"}`}>
            <CircleHalfIcon style={{ height: 19, width: 19 }} />
          </div>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Switch Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
