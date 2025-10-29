export default function Four() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn everything we can about your business goals, brand identity, and operational needs. We also offer insight into site selection and market alignment.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Design",
      description: "Through mood boards, conceptual sketches, and detailed 3D renderings, we translate your vision into visuals. We finalize layouts, materials, and specs to meet mall requirements and brand guidelines.",
      icon: "✏️"
    },
    {
      number: "03",
      title: "Build",
      description: "We coordinate with our build partners, managing production and installation timelines. Our experience with mall processes helps streamline approvals and avoid unnecessary delays.",
      icon: "🔨"
    },
    {
      number: "04",
      title: "Launch",
      description: "We support your final walkthrough, installation, and opening, ensuring every detail is right and your space is ready to impress. Ongoing support is available for future locations or updates.",
      icon: "🚀"
    }
  ];

  return (
    <section className="relative bg-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Process Overview</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A Seamless Journey from Idea to Grand Opening
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Our four-step approach is simple, collaborative, and built to deliver results—whether you're building your first location or scaling across the country.
          </p>
        </div>

        {/* Process steps */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 hidden h-full w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent lg:block" />
                )}
                
                <div className="relative flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-zinc-900/80 lg:flex-row lg:items-start lg:gap-8">
                  {/* Step number and icon */}
                  <div className="flex shrink-0 flex-col items-center gap-4 lg:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-3xl ring-1 ring-inset ring-blue-500/30">
                      {step.icon}
                    </div>
                    <div className="text-5xl font-bold text-blue-500/30 lg:text-6xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Start the Process
          </button>
        </div>
      </div>
    </section>
  );
}
