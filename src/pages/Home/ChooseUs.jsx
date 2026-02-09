import { GiLaserPrecision } from "react-icons/gi";
import { FaTooth, FaSmileBeam } from "react-icons/fa";
import { MdOutlineScanner, MdOutlineMedicalServices } from "react-icons/md";

const features = [
  {
    title: "Laser Technology",
    desc: "Experience the future of painless and precise dental care with our cutting-edge laser treatment at Dr. Teeth Family. Your smile, our precision!",
    icon: <GiLaserPrecision />,
  },
  {
    title: "Painless Injection",
    desc: "Experience dental care without the fear – Our painless computerized injection system makes your smile our top priority!",
    icon: <FaTooth />,
  },
  {
    title: "3D Dental Scanner",
    desc: "Experience the future of precision dentistry with our state-of-the-art 3D dental scanner – where innovation meets your smile!",
    icon: <MdOutlineScanner />,
  },
  {
    title: "Guided Dental Implant",
    desc: "Experience the future of dental implants with our cutting-edge Guided Dental Implant technology, ensuring precision, comfort, and a smile that lasts a lifetime!",
    icon: <MdOutlineMedicalServices />,
  },
  {
    title: "Digital Smile Design",
    desc: "Transform your smile with precision and artistry – Experience the future of dentistry with Digital Smile Design at our clinic!",
    icon: <FaSmileBeam />,
  },
];

const WhyChooseUs = () => {
  return (
    <section  className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#245e7a] mb-10">
            Why choose our dental clinic
          </h2>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                {/* Icon */}
                <div className="text-[#245e7a] text-3xl mt-1">{item.icon}</div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-[#245e7a] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560070201-d3d11effa179?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dental Clinic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
