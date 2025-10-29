export default function One() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
        {/* Hero content */}
        <div className="flex flex-col items-center gap-8">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-zinc-800/50 px-4 py-1.5 text-sm font-medium text-zinc-300 ring-1 ring-inset ring-zinc-700/50 backdrop-blur-sm">
            Welcome to Grafica Studios
          </span>
          
          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Design That Sells.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spaces That Speak.
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            From the first sketch to final build, Grafica Studios transforms your retail ideas into impactful environments. With expert design, hands-on collaboration, and strong relationships with major malls, we help brands stand out—and succeed—in competitive retail spaces.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:bg-zinc-100">
              Get Started
            </button>
            <button className="rounded-full border border-zinc-700 bg-zinc-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
