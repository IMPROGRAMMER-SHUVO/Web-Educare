import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";


const Anotherhome = ({course}) => {
    const {image,id, benefit,bookname}=course
    return (
        <div className="py-10 ">
        <div className="rounded overflow-hidden shadow-lg  ">
          <img  src={image} className="w-full rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/50 " />
          <div className="px-6 py-4  hover:bg-slate-600">
            <div className="font bold text-xl mb-2">
              <h2 className="text-green-600 font-bold text-justify">{bookname}</h2>
              <p className="text-justify">
                {benefit}
              </p>
              <p className="bg-gray-300 text-center rounded-3xl p-2 mt-2 "> <FontAwesomeIcon icon={faDollarSign} />50/per year</p>
            </div>
          </div>
      <p className=" hover:bg-violet-600 bg-green-600 p-2 rounded-2xl my-5 items-center text-center "> <Link  to={`/homs/${id}`}>Details</Link></p>
        </div>
        </div>
    );
};

export default Anotherhome;