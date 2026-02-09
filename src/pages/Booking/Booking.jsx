const Booking = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden gap-8 grid grid-cols-1 md:grid-cols-2">
        {/* Form Section */}
        <div>
          <div className="px-6 py-4 text-2xl font-bold text-center text-white uppercase bg-[#4284a3]">
            Book an Appointment
          </div>

          <form className="px-6 py-6 space-y-4">
            <div>
              <label className="block mb-2 font-bold text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2 font-bold text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-700">
                Service
              </label>
              <select className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800">
                <option value="">Select a service</option>
                <option>General Dentistry</option>
                <option>Clear Aligner</option>
                <option>Cosmetic Dentistry</option>
                <option>Oral Surgery</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter any additional information"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full h-full py-4 font-semibold text-white bg-[#245e7a] rounded hover:bg-gray-800 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
        {/* Image Section */}

        <div className="h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Appointment"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
