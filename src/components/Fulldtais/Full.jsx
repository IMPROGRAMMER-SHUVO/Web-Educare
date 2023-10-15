import { useNavigate } from "react-router-dom";

const Full = ({hm}) => {
    const {bookname,benefit,index }=hm
    const navigate=useNavigate();
   const Goback=()=>{
navigate(-1);
   }
    return (
        <div className="mb-5 mt-5 bg-gray-800 mx-10 lg:mx-10 p-5 lg:p-5 rounded-3xl text-justify lg:text-justify" >
           <div>
            <h3 className="bg-blue-700 p-2 rounded-2xl text-center">{bookname}</h3>
            </div> 
          
        <li className="marker:text-sky-400 list-disc pl-5 space-y-3 text-violet-600"> all ={index}</li>
          <p className="text-white">Benefit :{benefit}</p>
         <div>
         <button className="bg-yellow-300 rounded-2xl  text-center hover:bg-slate-400 shadow-2xl" onClick={Goback}>Goback</button>
         </div>
        </div>
        
    );
};

export default Full;