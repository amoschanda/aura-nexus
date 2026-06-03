import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex-grow flex flex-col px-margin-page pt-stack-sm pb-stack-lg max-w-[440px] mx-auto w-full justify-center">
      <section className="text-center mb-12 mt-6">
        <h2 className="font-display text-[36px] leading-[44px] font-extrabold text-on-surface mb-3">Join Aura</h2>
        <p className="font-body text-[17px] text-on-surface-variant/70">Create your secure workspace</p>
      </section>

      <div className="glass-card squircle p-8 mb-stack-lg flex flex-col gap-8 items-center">
        <SignUp 
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
            }
          }}
        />
      </div>
    </main>
  );
}
