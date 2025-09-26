import { Link } from "react-router-dom";

export default function WhatsNew({ bgImage }: { bgImage: string }) {
  const cta =
    "inline-flex items-center justify-center rounded-xl bg-primary text-white h-12 px-6 font-semibold hover:bg-primary/90 transition-colors shadow";

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.92), rgba(255,255,255,.95)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's New?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated with the latest from the WEALTH programme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/news"
              className="inline-flex h-12 px-6 items-center justify-center rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/5"
            >
              View All News
            </Link>
            <a href="#subscribe" className={cta}>
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
