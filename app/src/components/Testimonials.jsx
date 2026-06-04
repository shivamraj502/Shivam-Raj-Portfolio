import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Kumar",
      text: "Excellent developer. Delivered the project before deadline."
    },
    {
      name: "Priya Sharma",
      text: "Professional and highly skilled in React development."
    },
    {
      name: "Amit Singh",
      text: "Very responsive and great communication."
    }
  ];

  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Testimonials
        </h2>

        <p className="text-center text-gray-500 mt-2">
          My Clients Say
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-4 text-gray-600 leading-7">
                {review.text}
              </p>

              <h3 className="font-semibold mt-6">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;