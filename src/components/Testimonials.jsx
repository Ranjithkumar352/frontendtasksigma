import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.",
    },
    {
      name: "Sarah Johnson",
      role: "CEO at BrightTech",
      text: "Their team is responsive, creative, and highly skilled. Our conversions improved within the first month.",
    },
    {
      name: "David Lee",
      role: "Founder at StartupX",
      text: "Excellent strategy and execution. Highly recommend them for SEO and PPC campaigns.",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start gap-4 flex-col md:flex-row md:items-center">
          <span className="bg-brandGreen px-3 py-1 rounded-md font-semibold">
            Testimonials
          </span>
          <p className="text-gray-600 max-w-xl">
            Hear from our happy clients about their experience.
          </p>
        </div>

        <div className="mt-10 bg-brandDark rounded-3xl p-8 text-white">
          <p className="text-gray-200 leading-relaxed max-w-3xl">
            “{testimonials[index].text}”
          </p>

          <div className="mt-6">
            <div className="font-semibold text-brandGreen">
              {testimonials[index].name}
            </div>
            <div className="text-sm text-gray-300">
              {testimonials[index].role}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === index ? "bg-brandGreen" : "bg-white/30"
                  }`}
                ></div>
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
