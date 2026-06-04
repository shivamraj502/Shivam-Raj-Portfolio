import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt
} from "react-icons/fa";

function Services() {
  return (
    <section
      id="services"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Services
        </h2>

        <p className="text-center text-gray-500 mt-2">
          What I Offer
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <ServiceCard
            icon={<FaPalette />}
            title="UI/UX Design"
          />

          <ServiceCard
            icon={<FaLaptopCode />}
            title="Web Development"
          />

          <ServiceCard
            icon={<FaMobileAlt />}
            title="Responsive Design"
          />

        </div>

      </div>
    </section>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-3 transition duration-300">

      <div className="text-indigo-500 text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <button className="mt-6 text-indigo-500">
        View More →
      </button>

    </div>
  );
}

export default Services;