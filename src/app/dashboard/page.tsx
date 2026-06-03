import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="flex justify-between items-center px-margin-page h-20 w-full bg-white/30 backdrop-blur-md border-b border-black/5 sticky top-0 z-50">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <h1 className="font-display text-[20px] font-bold tracking-tight text-on-surface">Aura Nexus</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <p className="text-[14px] font-bold text-on-surface">{user?.firstName || 'User'}</p>
            <p className="text-[12px] text-on-surface-variant/50">Pro Plan</p>
          </div>
          <UserButton />
        </div>
      </header>

      <main className="flex-grow p-margin-page max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Overview</h2>
          <p className="text-on-surface-variant/60">Welcome back to your secure workspace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stats Card */}
          <div className="glass-card squircle p-8 flex flex-col justify-between h-[200px]">
            <div>
              <p className="text-[15px] font-semibold text-on-surface-variant/70 mb-1">Security Score</p>
              <h3 className="text-[36px] font-extrabold text-primary">98%</h3>
            </div>
            <div className="flex items-center text-green-500 text-[14px] font-bold">
              <span className="material-symbols-outlined mr-1">trending_up</span>
              +2.4% from last week
            </div>
          </div>

          {/* Activity Card */}
          <div className="glass-card squircle p-8 flex flex-col justify-between h-[200px]">
            <div>
              <p className="text-[15px] font-semibold text-on-surface-variant/70 mb-1">Active Sessions</p>
              <h3 className="text-[36px] font-extrabold text-on-surface">12</h3>
            </div>
            <div className="flex items-center text-on-surface-variant/40 text-[14px]">
              Across 3 devices
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card squircle p-8 flex flex-col justify-between h-[200px]">
             <div>
              <p className="text-[15px] font-semibold text-on-surface-variant/70 mb-1">Quick Action</p>
              <h3 className="text-[20px] font-bold text-on-surface">New Secure Note</h3>
            </div>
            <button className="ios-button-gradient text-white h-12 rounded-xl font-bold text-[14px] w-full shadow-md">
              Create Note
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-[24px] font-bold text-on-surface mb-6">Recent Activity</h3>
          <div className="glass-card squircle overflow-hidden">
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">login</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Successful Login</p>
                  <p className="text-[12px] text-on-surface-variant/50">Chrome on macOS • Just now</p>
                </div>
              </div>
              <span className="text-[12px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">Secure</span>
            </div>
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Document Encrypted</p>
                  <p className="text-[12px] text-on-surface-variant/50">Quarterly_Report.pdf • 2 hours ago</p>
                </div>
              </div>
              <span className="text-[12px] font-bold text-on-surface-variant/30 bg-black/5 px-3 py-1 rounded-full">Encrypted</span>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Shield Protocol Updated</p>
                  <p className="text-[12px] text-on-surface-variant/50">System-wide • 5 hours ago</p>
                </div>
              </div>
              <span className="text-[12px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">System</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
