

const Instractor = ({about}) => {
    const {bookname,instructor, expertise,education,picture}=about
    return (
        <div className="py-10">
        <div className="rounded overflow-hidden shadow-lg  ">
          <img src={instructor.picture} className="w-full rounded-3xl" />
          <div className="px-6 py-4">
            <div className="font bold text-xl mb-2">
              <h2 className="text-green-600 font-bold text-justify">{bookname}</h2>
               <p>{instructor.name}</p>
             <p>{instructor.education}</p>
            </div>
          </div>
     
        </div>
        </div>
    );
};

export default Instractor;