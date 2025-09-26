import { Link } from "react-router-dom";

export default function MeetOurTeam({ bgImage }: { bgImage: string }) {
  const cta =
    "inline-flex items-center justify-center rounded-xl bg-primary text-white h-12 px-6 font-semibold hover:bg-primary/90 transition-colors shadow";

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(7,59,58,.92), rgba(7,59,58,.88)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Led by distinguished researchers and practitioners in mental health,
          statistics, and policy
        </p>
        <div>
          <Link to="/faculty" className={cta}>
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
