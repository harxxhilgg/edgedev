import { FooterBtn } from "../ui/main/body-btn";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center text-secondary -space-y-1">
      <p className="text-[13px] tracking-wide">
        Developed by <b><FooterBtn /></b>
      </p>
      <p className="text-[13px] tracking-wide">
        © 2026. All rights reserved.
      </p>
    </div>
  );
};