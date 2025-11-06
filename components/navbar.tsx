"use client";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 sm:px-8 lg:px-12 bg-zinc-50/60 backdrop-blur-sm border-b border-black/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/studios.svg" alt="Grafica Studios" className="h-12 w-auto invert" />
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-semibold text-black transition-colors hover:text-black/80"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:+15612215458" className="hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-black transition-colors hover:text-black/80"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.293a.414.414 0 00.431.087l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

