import Footer from "@/components/footer/bottom-footer";
import UnderwayToast from "@/components/ui/main/underway-toast";
import TopNav from "@/components/ui/nav/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <UnderwayToast />
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center sm:items-start">
        <div className="w-full sticky top-0 z-50 backdrop-blur-xs bg-background/70 sm:bg-background/50">
          <TopNav />
        </div>

        <div className="w-full flex-1">{children}</div>

        <div className="w-full mt-auto py-4">
          <Footer />
        </div>
      </main>
    </div>
  );
}
