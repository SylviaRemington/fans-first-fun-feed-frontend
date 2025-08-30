import { useEffect } from "react";
import { useParams } from "react-router";
import * as funmomentService from '../../services/funmomentService';

const FunMomentDetails = () => {

    // Original Version
    const params = useParams (); 
    console.log(params.id); 

    // Addtl Version
    // const { id } = useParams;
    // console.log(id);

    useEffect(() => {
        // Setting up our data fetching function & call the show function with that id (because the funmomentService needs the id for the show function)
        const getData = async () => {
            const funmomentToShow = await funmomentService.show(params.id);
            console.log(funmomentToShow);
        };
        getData();
    }, []);

    return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;