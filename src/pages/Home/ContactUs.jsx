import { FaAddressBook, FaHouseDamage } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const ContactUs = () => {
  return (
    <div id="contact-us" className=" py-12 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:text-center">
          <p className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-[#245e7a] sm:text-4xl">
            Contact Us !
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 ">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Address */}
            <div className="flex bg-[#eaf1f5] p-14">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-5xl rounded-md text-[#245e7a] ">
                  <FaAddressBook />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-2xl font-medium text-gray-900">Address</dt>
                <dd className="mt-2 text-[18px] text-black">
                  123 Main St, Suite 100 <br />
                  Anytown, USA 12345
                </dd>
              </div>
            </div>

            {/* Phone */}
            <div className="flex bg-[#eaf1f5] p-14">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-5xl rounded-md text-[#245e7a] ">
                  <FaPhoneVolume />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg font-medium text-gray-900">Phone</dt>
                <dd className="mt-2 text-[18px] text-black">(555) 555-5555</dd>
              </div>
            </div>

            {/* Email */}
            <div className="flex bg-[#eaf1f5] p-14">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-5xl rounded-md text-[#245e7a] ">
                  <MdMarkEmailUnread />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-2xl font-medium text-gray-900">Email</dt>
                <dd className="mt-2 text-[18px] text-black">
                  info@ourstore.com
                </dd>
              </div>
            </div>

            {/* Hours */}
            <div className="flex bg-[#eaf1f5] p-14">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center  text-5xl rounded-md text-[#245e7a] ">
                  <FaHouseDamage />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-2xl  font-medium text-gray-900">
                  Store Hours
                </dt>
                <dd className="mt-2 text-[18px] text-black">
                  Monday – Friday: 9am to 8pm <br />
                  Saturday: 10am to 6pm <br />
                  Sunday: 12pm to 4pm
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
