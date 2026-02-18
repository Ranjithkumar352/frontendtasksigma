export default function Brands() {
  const brands = ["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center text-gray-500 font-semibold">
          {brands.map((b) => (
            <div key={b} className="uppercase tracking-wide text-sm">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
