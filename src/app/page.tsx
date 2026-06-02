import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center px-margin-page h-20 w-full bg-transparent sticky top-0 z-50">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <h1 className="font-display text-[20px] font-bold tracking-tight text-on-surface">Aura</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-margin-page text-center">
        <h2 className="font-display text-[48px] leading-[56px] font-extrabold text-on-surface mb-6">
          Intelligence for your <br />
          <span className="text-primary">secure workspace</span>
        </h2>
        <p className="font-body text-[20px] text-on-surface-variant/70 mb-12 max-w-[600px]">
          Experience the future of workspace security and productivity with Aura Nexus.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px]">
          <Link href="/sign-in" className="flex-1 ios-button-gradient text-white h-16 rounded-2xl font-bold text-[15px] flex items-center justify-center shadow-lg transition-all">
            Get Started
          </Link>
          <Link href="/sign-up" className="flex-1 ios-secondary-button text-on-surface h-16 rounded-2xl font-bold text-[15px] flex items-center justify-center transition-all">
            Create Account
          </Link>
        </div>
      </main>

      <footer className="flex flex-col items-center space-y-4 w-full px-margin-page pb-12 mt-auto">
        <p className="text-[12px] font-medium text-on-surface-variant/30 tracking-tight">© 2024 Aura Nexus Inc.</p>
      </footer>
    </div>
  );
}
