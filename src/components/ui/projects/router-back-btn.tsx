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
      className="cursor-pointer"
      sound
    >
      <ArrowUUpLeftIcon />
      Back to Projects
    </Button>
  );
};