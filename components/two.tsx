export default function Two() {
  const services = [
    {
      title: "Consultation & Site Guidance",
      description: "Finding the right location is key to success. We consult with you from the start and connect you directly with mall leasing managers. Whether you're new to retail or ready to expand, our insights help you choose the best possible placement for traffic, visibility, and budget.",
      icon: "🗺️"
    },
    {
      title: "Retail Design",
      description: "Every space we design is created to reflect your brand and maximize usability. From kiosks and inline stores to complex custom builds, we blend aesthetics and functionality to craft retail environments that attract and convert customers.",
      icon: "🏪"
    },
    {
      title: "Store Refurbishment",
      description: "Already have a store or kiosk? We can help you update it with a modern touch. Whether it's a full makeover or simple upgrades, we specialize in transforming existing spaces into fresh, engaging, and efficient experiences.",
      icon: "🔄"
    },
    {
      title: "Branding & Identity",
      description: "Your logo is just the start. We build full branding systems—from signage and menus to packaging and interior graphics—that connect with your customers and elevate your presence. Whether you're building a new brand or refreshing an old one, we deliver cohesive, recognizable visuals.",
      icon: "✨"
    },
    {
      title: "Build Execution",
      description: "We've partnered with experienced, vetted builders who know how to bring retail designs to life. With detailed plans and mall-compliant execution, we coordinate construction timelines and quality control to make sure your space is completed on schedule and to spec.",
      icon: "🔨"
    }
  ];

  return (
    <section className="relative bg-black py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What We Do</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We Handle It All. You Focus on Growing Your Brand.
          </p>
        </div>

        {/* Services grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-3xl ring-1 ring-inset ring-white/10">
                {service.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-10" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
