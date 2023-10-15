import { useLoaderData, } from "react-router-dom";
import Anotherhome from "../Anotherhome/Anotherhome";

const Home = () => {
    const courses=useLoaderData();
  return (
    <div>
      <div
        id="homex"
        className="min-h-screen flex py-10 md:flex-row flex-col items-center"
      >
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src="https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/tKxGGYpspi.jpg"
            alt=""
            className="md:w-11/12 h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-blue-400 font-bold">
              <span className="text-cyan-600 md:text-6xl text-5xl">
                Hello!
                <br />
              </span>
              WELCOME <span>Edu-Care</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
              its Best online couse
            </h4>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="mt-1 mb-2 text-center text-cyan-500 capitalize text-4xl font-bold">
            <span className="text-6xl text-fuchsia-700">O</span>ur Course
          </h1>
          <hr className="w-1/5 mx-auto"></hr>
        </div>
        {/* card */}
        <div className=" rounded-3xl  bg-white shadow-lg shadow-blue-500/50 grid grid-cols-1 lg:grid-cols-4 lg:gap-4 justify-items-center px-5">
    
      
        {
courses.map(course=><Anotherhome
key={course.id}
course={course}
></Anotherhome>)
        }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
