"use client";

import { Button } from "../button";
import { useRouter } from "next/navigation";
import { ArrowUUpLeftIcon } from "@phosphor-icons/react";

export function RouterBackBtn() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => router.back()}
      className="active:scale-95 transition-all duration-300 cursor-pointer"
    >
      <ArrowUUpLeftIcon />
      Back to Projects
    </Button>
  );
};