import { FiArrowUpRight } from "react-icons/fi";

import seoImg from "../assets/seo.png";
import ppcImg from "../assets/ppc.png";

export default function Services() {
  const services = [
    {
      title: "Search engine optimization",
      bg: "bg-brandGray",
      img: seoImg,
    },
    {
      title: "Pay-per-click advertising",
      bg: "bg-brandGreen",
      img: ppcImg,
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start gap-4 flex-col md:flex-row md:items-center">
          <span className="bg-brandGreen px-3 py-1 rounded-md font-semibold">
            Services
          </span>
          <p className="text-gray-600 max-w-xl">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`${s.bg} border border-brandDark rounded-3xl p-7 flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center`}
            >
    
              <div>
                <h3 className="text-xl font-bold max-w-xs">{s.title}</h3>

                <button className="mt-6 flex items-center gap-2 font-semibold hover:opacity-70 transition">
                  Learn more <FiArrowUpRight />
                </button>
              </div>

    
              <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-44 sm:w-48 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
