import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Projects() {
  const projects = [
    {
      title: "AI Surveillance System",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      desc: "AI-powered surveillance platform using YOLOv8 and Deep Learning."
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern responsive portfolio built with React and Tailwind."
    },
    {
      title: "Weather App",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      desc: "Real-time weather forecasting using APIs."
    }
  ];

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Projects
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Most Recent Work
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="mt-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <img
                  src={project.image}
                  alt=""
                  className="rounded-3xl h-[350px] object-cover w-full"
                />

                <div>
                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mt-4 leading-8">
                    {project.desc}
                  </p>

                  <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl">
                    Demo →
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
export default Projects;