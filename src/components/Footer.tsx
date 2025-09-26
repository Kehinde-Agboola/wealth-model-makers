import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logow.png";
import { btn } from "@/components/button-variants";

/** ----------------------------------------------
 * Config (adjust without touching component logic)
 * ---------------------------------------------- */
const PROGRAMME_LINKS = [
  { label: "About", to: "/about" },
  { label: "Faculty", to: "/faculty" },
  { label: "Resources", to: "/resources" },
  { label: "News", to: "/news" },
] as const;

const SUPPORT_LINKS = [
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/faq" },
] as const;

const SOCIALS = [
  // Replace urls with real profiles or remove items
  {
    name: "X (Twitter)",
    url: "#",
    svgPath:
      "M18.244 2H21.5l-7.5 8.57L23 22h-6.223l-4.866-6.02L6.4 22H3.143l8.047-9.19L2 2h6.31l4.405 5.56L18.244 2Zm-1.09 18h1.69L8.94 3.94H7.16L17.155 20Z",
  },
  {
    name: "LinkedIn",
    url: "#",
    svgPath:
      "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4.96V24H.5zM9.5 8h4.75v2.2h.07c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.92 3.3 5.92 7.6V24H20.2v-7.1c0-1.7-.04-3.9-2.38-3.9-2.38 0-2.75 1.85-2.75 3.77V24H9.5z",
  },
] as const;

// Optional: point to your backend via env var (e.g., VITE_SUBSCRIBE_URL)
const SUBSCRIBE_ENDPOINT =
  import.meta.env.VITE_SUBSCRIBE_URL || "/api/subscribe";

/** ------------------
 * Utility
 * ------------------ */
type Status = null | "success" | "error";
const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/** ------------------
 * Component
 * ------------------ */
export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [message, setMessage] = useState<string>("");
  const year = useMemo(() => new Date().getFullYear(), []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setStatus(null);
    setMessage("");
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = (fd.get("email") || "").toString().trim();
    const hp = (fd.get("website") || "").toString(); // honeypot

    if (hp) {
      // silently succeed for bots
      setStatus("success");
      setMessage("Thanks! Check your inbox to confirm.");
      setLoading(false);
      form.reset();
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      if (!res.ok) throw new Error("Bad response");

      setStatus("success");
      setMessage("Thanks! Check your inbox to confirm.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={Logo} alt="WEALTH logo" className="h-20 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Advancing mental health solutions with data-driven models across
              Africa.
            </p>

            {/* Socials */}
            {SOCIALS.length > 0 && (
              <div className="mt-4 flex items-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="rounded-md p-2 hover:bg-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-muted-foreground"
                      aria-hidden="true"
                    >
                      <path d={s.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Programme */}
          <NavBlock title="Programme" links={PROGRAMME_LINKS} />

          {/* Support */}
          <NavBlock title="Support" links={SUPPORT_LINKS} />

          {/* Subscribe */}
          <div id="subscribe" aria-labelledby="subscribe-heading">
            <h4 id="subscribe-heading" className="font-semibold">
              Subscribe
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Get programme updates and research highlights.
            </p>

            <form onSubmit={onSubmit} className="mt-4" noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-invalid={status === "error" ? true : undefined}
                  aria-describedby="footer-subscribe-message"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={btn("", { size: "default" })}
                >
                  {loading ? "Joining…" : "Join"}
                </button>
              </div>

              <p
                id="footer-subscribe-message"
                className={
                  "mt-2 text-sm " +
                  (status === "success"
                    ? "text-primary"
                    : status === "error"
                    ? "text-red-600"
                    : "text-muted-foreground sr-only")
                }
                aria-live="polite"
                role="status"
              >
                {status ? message : "We’ll never share your email."}
              </p>

              {/* Optional compliance blurb */}
              <p className="mt-2 text-[11px] text-muted-foreground/80">
                By subscribing, you agree to receive updates from WEALTH. You
                can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center gap-2 border-t pt-6 text-xs text-muted-foreground">
          <span>© {year} WEALTH.</span>
          <span className="opacity-50">•</span>
          <span>Built for impact.</span>
        </div>
      </div>
    </footer>
  );
}

/** ------------------
 * Small presentational helpers
 * ------------------ */
function NavBlock({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <nav aria-label={title}>
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
