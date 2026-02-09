const Testimonials = () => {

    const testimonials = [
      {
        name: "SynthGen AI",
        username: "@synthgenai",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        message:
          "Listing on EliteAI.tools gave us a 40% boost in signups! The quality of traffic is incredible.",
        likes: 143,
        comments: 24,
        time: "3:42 PM · Feb 12, 2025",
        icon: "🐦",
      },
      {
        name: "NeuralScribe",
        username: "@neuralscribe",
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        message:
          "Fast-tracking our listing was the best marketing decision we made. 500+ daily users in two weeks!",
        likes: 217,
        comments: 53,
        time: "11:28 AM · Jan 29, 2025",
        icon: "🐦",
      },
      {
        name: "QuantumWrite",
        username: "@quantumwriteai",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        message:
          "The Boosted plan delivered incredible ROI. Demo requests increased 3x in the first month.",
        likes: 189,
        comments: 42,
        time: "4:15 PM · Feb 3, 2025",
        icon: "🐦",
      },
      {
        name: "VoiceGenius",
        username: "@voicegeniusai",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
        message:
          "The SEO boost is insane. First page rankings and traffic converts 2x better.",
        likes: 167,
        comments: 36,
        time: "2:10 PM · Jan 18, 2025",
        icon: "🐦",
      },
      {
        name: "DataSage",
        username: "@datasageai",
        image: "https://randomuser.me/api/portraits/women/43.jpg",
        message:
          "EliteAI.tools stands out. Our conversions are up 35% from this traffic!",
        likes: 201,
        comments: 47,
        time: "10:23 AM · Feb 8, 2025",
        icon: "🐦",
      },
      {
        name: "CopyMuse",
        username: "@copymuseai",
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        message:
          "Investors actually mentioned seeing us here during our seed round.",
        likes: 175,
        comments: 31,
        time: "1:35 PM · Jan 22, 2025",
        icon: "🐦",
      },
    ];

  return (
    <section id="review" className="py-16 ">
      <div className="max-w-8xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Users Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from tools that have successfully listed on our platform
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#f4faf8] rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.username}</p>
                </div>
                <div className="ml-auto text-blue-400">{item.icon}</div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-[20px]">{item.message}</p>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
