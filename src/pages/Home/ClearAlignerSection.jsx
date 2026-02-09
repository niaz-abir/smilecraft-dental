import image1 from "../../assets/before.jpg"
import image2 from "../../assets/after.jpg";

const ClearAlignerSection = () => {
  return (
    <section className="py-24 ">
      <div className="max-w-8xl mx-auto px-4">
        {/* Main Card */}
        <div className="bg-[#d5e4eb] rounded-[40px] p-10 md:p-14 grid gap-12 lg:grid-cols-2 items-center shadow-xl">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm font-semibold text-[#245e7a] uppercase tracking-wide">
              Clear Aligner
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Embrace the New Era with{" "}
              <span className="text-[#245e7a]">Clear Aligners</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Clear aligners are the modern, preferred choice for teeth
              straightening—discreet, comfortable, and cutting-edge. Perfect
              your smile with the latest in dental technology.
            </p>

            <button className="mt-8 px-8 py-3 rounded-sm bg-[#245e7a] text-white font-semibold hover:bg-[#245e7a] transition">
              Contact us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <figure className="diff aspect-16/9" tabIndex={0}>
              <div className="diff-item-1" role="img" tabIndex={0}>
                <img alt="daisy" src={image1} />
              </div>
              <div className="diff-item-2" role="img">
                <img alt="daisy" src={image2} />
              </div>
              <div className="diff-resizer"></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearAlignerSection;
