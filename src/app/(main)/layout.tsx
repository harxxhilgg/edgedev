import Footer from "@/components/footer/bottom-footer";
// import UnderwayToast from "@/components/ui/main/underway-toasst";
import TopNav from "@/components/ui/nav/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* <UnderwayToast /> */}
      <main className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <div className="w-full max-w-174 mx-auto sticky top-0 z-50 backdrop-blur-sm rounded-bl-sm rounded-br-sm">
          <TopNav />
        </div>

        <div className="w-full max-w-175 mx-auto px-4 mb-10">{children}</div>

        <div className="w-full mt-auto py-4 bg-[#F2F0EF] dark:bg-[#171616] border-t">
          <Footer />
        </div>
      </main>

      <div className="pointer-events-none fixed bottom-0 z-50 h-12 w-full bg-linear-to-t from-background via-background/50 to-transparent" />
    </div>
  );
}
