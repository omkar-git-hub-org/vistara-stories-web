import { SITE_NAME } from "../constants/theme";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-margin-desktop h-20">
      <div className="flex items-center">
        <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
      </div>
      <div className="font-headline-md text-headline-md text-primary tracking-widest uppercase">
        {SITE_NAME}
      </div>
      <div className="flex items-center">
        <span className="material-symbols-outlined text-primary cursor-pointer">search</span>
      </div>
    </nav>
  );
}