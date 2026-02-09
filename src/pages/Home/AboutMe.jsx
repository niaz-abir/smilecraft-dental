import { useEffect, useState } from "react";

const AboutMe = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about-us" className="py-20  dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#20536b] sm:text-5xl dark:text-white">
              About Our Company
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We're passionate about creating innovative solutions that help
              businesses thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ease-out delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Building Tomorrow's Solutions Today
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Founded in 2020, we've been at the forefront of digital
                transformation, helping over 10,000 businesses worldwide.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Our expert team delivers solutions that meet today’s challenges
                and anticipate tomorrow’s opportunities.
              </p>
            </div>

            {/* FEATURES */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-5">
                {[
                  {
                    title: "Expert Team",
                    desc: "50+ skilled professionals with years of experience",
                  },
                  {
                    title: "Global Reach",
                    desc: "Serving clients across 25+ countries worldwide",
                  },
                  {
                    title: "Innovation Focus",
                    desc: "Always adopting the latest technologies",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#20536b] shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 ease-out delay-400 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
                  alt="Team presentation"
                  className="w-full h-[420px] object-cover"
                />

                {/* GLASS STATS BAR */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-6 rounded-2xl backdrop-blur-xl mt-2 bg-gray-500/20 border border-gray-300/30 shadow-2xl">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      {[
                        { value: "5+", label: "Years" },
                        { value: "20+", label: "Team" },
                        { value: "15+", label: "Cities" },
                      ].map((stat, index) => (
                        <div key={index}>
                          <div className="text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/80">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* END GLASS */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
