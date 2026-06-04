import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Get In Touch
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
              <FaPhoneAlt className="text-indigo-500" />
              <div>
                <h3>Call Me</h3>
                <p className="text-gray-500">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
              <FaEnvelope className="text-indigo-500" />
              <div>
                <h3>Email</h3>
                <p className="text-gray-500">
                  shivam@email.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
              <FaMapMarkerAlt className="text-indigo-500" />
              <div>
                <h3>Location</h3>
                <p className="text-gray-500">
                  Bengaluru, India
                </p>
              </div>
            </div>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-xl p-4"
            ></textarea>

            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;