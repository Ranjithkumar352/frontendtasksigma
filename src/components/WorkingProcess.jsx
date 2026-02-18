import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function WorkingProcess() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
    },
    {
      title: "Research and Strategy Development",
      content:
        "We conduct market research, competitor analysis, and develop a customized marketing strategy aligned with your goals.",
    },
    {
      title: "Implementation",
      content:
        "Our team executes the strategy across channels like SEO, PPC, social media, and content marketing.",
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start gap-4 flex-col md:flex-row md:items-center">
          <span className="bg-brandGreen px-3 py-1 rounded-md font-semibold">
            Our Working Process
          </span>
          <p className="text-gray-600 max-w-xl">
            Step-by-step guide to achieving your business goals.
          </p>
        </div>

    
        <div className="mt-10 flex flex-col gap-4">
          {items.map((it, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={it.title}
                className={`border border-brandDark rounded-3xl overflow-hidden ${
                  isOpen ? "bg-brandGreen" : "bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xl font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="font-bold text-lg">{it.title}</div>
                  </div>

                  <div className="w-10 h-10 border border-brandDark rounded-full flex items-center justify-center bg-white">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-700 max-w-3xl">
                    {it.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
