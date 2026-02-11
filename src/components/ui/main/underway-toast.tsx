'use client';

import { GearSixIcon } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Toaster } from '../sonner';

export default function UnderwayToast() {
  useEffect(() => {
    const lastDismissed = localStorage.getItem('portfolio-toast-dismissed');
    const today = new Date().toDateString();

    if (!lastDismissed || lastDismissed !== today) {
      toast("In Development", {
        description: "Some pages may have incomplete content. Thanks for visiting!",
        duration: Infinity,
        closeButton: true,
        onDismiss: () => {
          localStorage.setItem('portfolio-toast-dismissed', today);
        },
        icon: <GearSixIcon />,
      });
    }
  }, []);

  return <Toaster position="top-right" />;
}
