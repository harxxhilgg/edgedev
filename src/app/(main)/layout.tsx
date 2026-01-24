import TopNav from "@/components/ui/nav/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-xl flex-col items-center sm:items-start">
        <TopNav />
        {children}
      </main>
    </div>
  );
};