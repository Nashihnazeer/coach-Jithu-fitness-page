export default function Process() {

  const steps = [
    "Assess",
    "Plan",
    "Execute",
    "Evolve"
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-0 overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        <img
          src="/images/BGIMAGE_FITNESS.png"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">

        <h2 className="text-5xl font-black mb-16 text-white">
          My Approach
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
            >
              <span className="text-lime-500 font-bold">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {step}
              </h3>

              <p className="mt-4 text-white/80">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}

        </div>

      </div>
      <div className="relative z-10 mt-auto border-t border-white/10">
        <div className="text-center text-white/70 text-sm py-4">
          © 2026 Hale · Aiswarya Partner Page
        </div>
      </div>
    </section>
  );
}