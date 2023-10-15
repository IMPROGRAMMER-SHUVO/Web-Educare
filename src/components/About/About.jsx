import { useLoaderData } from "react-router-dom";
import Instractor from "../Instractor/Instractor";

const About = () => {
  const abouts=useLoaderData()
  const info = [
    { text: "Our service", count: "04" },
    { text: "Students of this course", count: "2400" },
    { text: " successfully this course completed student", count: "1500" },
  ];
    return (
        <div>
        <section id="about" className="py-10 text-fuchsia-600">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
       About<span className="text-cyan-600">EduCare</span>
        </h3>
       
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-blue-700 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Are you eager to explore the fundamental sciences and mathematics from the comfort of your own home? Our Integrated Science and Mathematics online course offers a unique opportunity to dive into the worlds of physics, chemistry, biology, and mathematics. This comprehensive course is designed to provide students with a strong foundation in these core subjects, fostering a deep understanding of the natural world and the mathematical principles that underpin it.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-purple-700">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
             
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src='/src/imges/images3.jpg'
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <h1 className="mt-1 mb-2 text-center text-cyan-500 capitalize text-4xl font-bold">
            <span className="text-6xl text-green-700">O</span>ur Instractor
          </h1>
          <hr className="w-1/5 mx-auto"></hr>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 justify-items-center px-5">
            {
abouts.map(about=><Instractor
key={about.id}
about={about}


></Instractor>)
            }
            </div>
        </div>
    );
};

export default About;