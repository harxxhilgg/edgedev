import { FooterBtn } from "../ui/main/body-btn";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col text-center gap-0 leading-[1.15]">
        <p className="text-[13px] tracking-wide text-black/60 dark:text-white/60">
          Developed by <b><FooterBtn /></b>
        </p>
        <p className="text-[13px] tracking-wide text-black/60 dark:text-white/60">
          © 2026. All rights reserved.
        </p>
      </div>
    </div>
  );
};