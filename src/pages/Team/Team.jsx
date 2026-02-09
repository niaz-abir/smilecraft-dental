
import image1 from "../../assets/image1 (1).jpg"
import image2 from "../../assets/image1 (2).jpg"
import image3 from "../../assets/image1 (3).jpg"
import image4 from "../../assets/image1 (4).jpg"
import image5 from "../../assets/image1 (5).jpg"
import image6 from "../../assets/image1 (6).jpg"
import image7 from "../../assets/image1 (7).jpg"
import image8 from "../../assets/image1 (8).jpg";
const Team = () => {

    const teamMembers = [
      {
        name: "Alex Morgan",
        role: "CEO & Founder",
        desc: "Visionary leader with 15+ years of experience in tech innovation.",
        img: image1,
      },
      {
        name: "Sarah Johnson",
        role: "Chief Dentist",
        desc: "Award-winning designer with a passion for creating beautiful, functional interfaces.",
        img: image2,
      },
      {
        name: "Michael Chen",
        role: "CTO",
        desc: "Tech genius with expertise in AI and machine learning technologies.",
        img: image3,
      },
      {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        desc: "Creative strategist who excels at building and promoting brands.",
        img: image4,
      },
      {
        name: "David Wilson",
        role: "Mid Dentist",
        desc: "Full-stack developer with a knack for solving complex problems.",
        img: image5,
      },
      {
        name: "Sophia Lee",
        role: "Junior Dentist",
        desc: "Human-centered designer focused on intuitive user experiences.",
        img: image6,
      },
      {
        name: "James Taylor",
        role: "Product Manager",
        desc: "Strategic thinker who bridges business and technology.",
        img: image7,
      },
      {
        name: "Olivia Martinez",
        role: "Intern",
        desc: "Dedicated to ensuring our clients succeed.",
        img: image8
      },
    ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  text-[#245e7a] ">
            Meet Our Talented Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-lg">
            We're a passionate team dedicated to delivering the best results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition">
                      in
                    </a>
                    <a className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition">
                      tw
                    </a>
                    <a className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition">
                      @
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-[#245e7a] font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

     
        
      </div>
    </section>
  );
};

export default Team;
