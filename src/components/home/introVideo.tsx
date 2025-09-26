export default function IntroVideo({
  title = "Introductory Video",
  byline = "By the Principal Investigator",
  videoUrl, // e.g., "https://www.youtube.com/embed/XXXXX"
  posterImage, // fallback image if you want a thumbnail
}: {
  title?: string;
  byline?: string;
  videoUrl?: string;
  posterImage?: string;
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-muted-foreground mt-2">{byline}</p>

          <div className="mt-8 aspect-video rounded-2xl overflow-hidden border shadow-elegant">
            {videoUrl ? (
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Introductory Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full grid place-items-center bg-muted">
                <span className="text-sm text-muted-foreground">
                  Video coming soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
