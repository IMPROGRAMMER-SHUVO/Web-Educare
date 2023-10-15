import { Link } from "react-router-dom";
import { useLoaderData, } from "react-router-dom";
import Anotherhome from "../Anotherhome/Anotherhome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <nav className="p-5   bg-white shadow   md:flex md:items-center md:justify-between ">
            <div  >
                <span
                className="text-2xl font-[poppins]">
                   <span className="text-purple-700 font-extrabold text-4xl">E</span><span className="text-red-600 font-Poppins font-extrabold">d</span>u<span className="text-indigo-500 font-extralight">c</span>ar<span className="text-green-700 font-extrabold ">e</span><FontAwesomeIcon icon={faUserGraduate} /></span>
          </div>
       <div className="md:flex md:items-center font-bold z-[-1] md:z-auto md:static  w-full  left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100">

        <Link  className="mx-4   my-6 md:my-0 text-xl  hover:text-cyan-600 duration-200 "  to='/'>Home</Link>    
        <Link  className="mx-4   my-6 md:my-0 text-xl  hover:text-cyan-600 duration-200  " to='/About'>About</Link>
        <Link  className="mx-4   my-6 md:my-0 text-xl  hover:text-cyan-600 duration-200  " to='/Servicess'>Service</Link>
        <Link  className="mx-4   my-6 md:my-0 text-xl  hover:text-cyan-600 duration-200  " to='/Contact'>Contact</Link>
       </div>
        </nav>
    );
};

export default Header;