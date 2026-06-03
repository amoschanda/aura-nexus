import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex-grow flex flex-col px-margin-page pt-stack-sm pb-stack-lg max-w-[440px] mx-auto w-full justify-center">
      <section className="text-center mb-12 mt-6">
        <h2 className="font-display text-[36px] leading-[44px] font-extrabold text-on-surface mb-3">Welcome back</h2>
        <p className="font-body text-[17px] text-on-surface-variant/70">Sign in to your secure workspace</p>
      </section>

      <div className="glass-card squircle p-8 mb-stack-lg flex flex-col gap-8 items-center">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-transparent shadow-none border-none p-0 w-full",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton: "w-full flex items-center justify-center space-x-3 h-14 ios-secondary-button rounded-2xl transition-all font-semibold text-[15px] text-on-surface border-none shadow-none",
              socialButtonsBlockButtonText: "text-on-surface font-semibold",
              dividerLine: "bg-black/5",
              dividerText: "font-semibold text-[12px] text-on-surface-variant/40 uppercase tracking-widest px-4",
              formButtonPrimary: "w-full ios-button-gradient text-white h-16 rounded-2xl font-bold text-[15px] transition-all flex items-center justify-center shadow-lg border-none",
              formFieldInput: "w-full px-5 h-14 bg-white/65 backdrop-blur-md border-[0.5px] border-black/10 rounded-2xl font-body text-[17px] text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/15 transition-all",
              formFieldLabel: "font-semibold text-[15px] text-on-surface-variant/80 ml-1 mb-2.5",
              footerActionLink: "text-primary font-bold hover:opacity-70 transition-opacity",
              identityPreviewText: "text-on-surface",
              identityPreviewEditButtonIcon: "text-primary",
            }
          }}
        />
      </div>
      
      <footer className="flex flex-col items-center space-y-4 w-full px-margin-page pb-12 mt-auto">
        <div className="flex space-x-6 items-center">
          <a className="text-[12px] font-semibold text-on-surface-variant/50 hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
          <div className="w-1 h-1 rounded-full bg-black/10"></div>
          <a className="text-[12px] font-semibold text-on-surface-variant/50 hover:text-on-surface transition-colors" href="#">Terms of Service</a>
        </div>
        <p className="text-[12px] font-medium text-on-surface-variant/30 tracking-tight">© 2024 Aura Auth Inc.</p>
      </footer>
    </main>
  );
}
