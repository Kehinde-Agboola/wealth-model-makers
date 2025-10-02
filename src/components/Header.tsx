import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"; // for styling the Contact button
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logow.png";

const nav = [
  { name: "About Us", href: "/about" },
  { name: "Faculty", href: "/faculty" },
  { name: "News", href: "/news" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "LMS", href: "/lms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-2">
        {/* Make row relative so we can absolutely center the nav */}
        <div className="relative flex h-16 items-center">
          {/* Left: Logo */}
          <Link to="/" className="inline-flex items-center">
            <img src={Logo} alt="WEALTH logo" className="h-14 w-auto md:h-20" />
          </Link>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {nav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-primary underline underline-offset-8"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Contact (desktop) */}
          <div className="ml-auto hidden md:flex">
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: "default" }), "px-4")}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (blur + tint) */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Right drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-screen w-[80%] max-w-sm border-l border-border bg-background shadow-xl transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            className="inline-flex items-center"
            onClick={() => setOpen(false)}
          >
            <img src={Logo} alt="WEALTH logo" className="h-14 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-2">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact action on mobile */}
          <div className="mt-4 px-1">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                "w-full justify-center inline-flex",
                buttonVariants({ variant: "default" })
              )}
            >
              Contact
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
