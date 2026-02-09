const services = [
  {
    title: "General Dentistry",
    image:
      "https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clear Aligner",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Oral Surgery",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section id="service" className="py-20 bg-gradient-to-r from-[#296a8a] to-[#5791ad]">
      <div className=" mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-14">
          OUR SERVICES
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl h-[420px]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* Title */}
              <div className="absolute inset-0 flex items-start p-6">
                <h3 className="text-white text-2xl font-semibold">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
