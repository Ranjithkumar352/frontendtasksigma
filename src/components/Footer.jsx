import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <div className="bg-brandDark rounded-3xl p-8 md:p-10 text-white">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-block w-4 h-4 bg-white rotate-45"></span>
              Positivus
            </div>


            <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
              {links.map((item) => (
                <a key={item} href="#" className="hover:text-white transition">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brandDark hover:opacity-80 transition"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brandDark hover:opacity-80 transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brandDark hover:opacity-80 transition"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-block bg-brandGreen text-brandDark px-3 py-1 rounded-md font-semibold text-sm">
                Contact us:
              </div>

              <div className="mt-5 space-y-3 text-gray-300 text-sm">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>
                  Address: 1234 Main St <br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 md:p-7">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white placeholder:text-gray-400 outline-none"
                />

                <button className="bg-brandGreen text-brandDark px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition whitespace-nowrap">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>


          <div className="mt-10 border-t border-white/20"></div>


          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-400">
            <p>© 2023 Positivus. All Rights Reserved.</p>

            <a href="#" className="underline hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
