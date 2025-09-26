export default function Contact() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        We’ll get back to you shortly.
      </p>

      <form className="mt-6 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input id="name" className="w-full h-11 rounded-xl border px-4" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-11 rounded-xl border px-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="msg">
            Message
          </label>
          <textarea
            id="msg"
            rows={5}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>
        <button className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 font-semibold text-white hover:bg-primary/90">
          Send
        </button>
      </form>
    </section>
  );
}
