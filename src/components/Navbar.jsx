import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-block w-4 h-4 bg-brandDark rotate-45"></span>
          Positivus
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:opacity-70 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden md:block border border-brandDark px-5 py-2 rounded-lg font-medium hover:bg-brandDark hover:text-white transition">
          Request a quote
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="border rounded-xl p-4 flex flex-col gap-3">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="py-2 border-b last:border-b-0"
              >
                {item}
              </a>
            ))}
            <button className="mt-2 bg-brandDark text-white py-2 rounded-lg">
              Request a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
