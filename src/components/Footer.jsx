import { SITE_NAME } from "../constants/theme";

const LINKS = ["PORTFOLIO", "JOURNAL", "CONTACT", "PRIVACY"];
const SOCIAL_ICONS = ["brand_awareness", "camera", "mail"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-20 bg-surface border-t border-white/5">
      <div className="flex flex-col items-center gap-stack-lg px-6 md:px-margin-desktop mx-auto">
        <div className="font-headline-md text-headline-md text-primary uppercase tracking-widest italic">
          {SITE_NAME}
        </div>
        <div className="flex gap-stack-lg flex-wrap justify-center">
          {LINKS.map((link) => (
            <a
              key={link}
              className="font-label-caps text-label-caps text-on-surface-variant hover:underline decoration-primary underline-offset-8 uppercase opacity-80 hover:opacity-100 transition-opacity"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-6 mt-4">
          {SOCIAL_ICONS.map((icon) => (
            <span
              key={icon}
              className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors"
            >
              {icon}
            </span>
          ))}
        </div>
        <p className="font-label-caps text-label-caps text-on-surface-variant opacity-50 mt-8">
          © {year} {SITE_NAME}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}