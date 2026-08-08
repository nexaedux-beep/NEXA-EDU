import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const links = [
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
  { href: site.social.telegram, label: "Telegram", Icon: Send },
  { href: site.social.x, label: "X (Twitter)", Icon: XIcon },
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
  { href: site.whatsapp, label: "WhatsApp", Icon: MessageCircle },
];

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${box} grid place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-[var(--shadow-soft)]`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}
