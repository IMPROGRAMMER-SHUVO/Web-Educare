import { useLoaderData } from "react-router-dom";
import Full from "../Fulldtais/Full";



const DetailsHome = () => {
 
const homs=useLoaderData();

console.log(homs)
    return (
        <div>
{
    homs.map(hm=><Full
    key={hm.id}
    hm={hm}>

    </Full>)
}

        </div>
    );
};

export default DetailsHome;