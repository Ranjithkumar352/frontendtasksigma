import heroImg from "../assets/image.png";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Navigating the <br /> digital landscape <br /> for success
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="mt-7 bg-brandDark text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Book a consultation
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
