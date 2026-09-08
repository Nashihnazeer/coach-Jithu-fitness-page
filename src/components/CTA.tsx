export default function CTA() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center">

          <div>
            <h2 className="text-white text-4xl font-black">
              Lets Build The Best Version Of You
            </h2>
          </div>

          <div className="flex gap-4 mt-6 lg:mt-0">
            <button className="bg-lime-400 px-8 py-4 rounded-xl font-bold">
              Book A Call
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl">
              Whatsapp
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}