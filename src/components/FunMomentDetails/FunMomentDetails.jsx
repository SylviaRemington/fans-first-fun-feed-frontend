import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as funmomentService from '../../services/funmomentService';

const FunMomentDetails = () => {

    // Original Version
    const params = useParams (); 
    console.log(params.id); 

    // The 'funmoment' in the state is what I'll be using in my return.
    const [funmoment, setFunMoment] = useState(null);
    const funmomentId = params.id;

    // Addtl Version
    // const { id } = useParams;
    // console.log(id);

    useEffect(() => {
        // Setting up our data fetching function & call the show function with that id (because the funmomentService needs the id for the show function)
        const getData = async () => {
            const funmomentToShow = await funmomentService.show(funmomentId);  //!check this id part to make sure I don't need funmomentId instead. Was originally params.id & I changed it; but not sure if it should have been params.funmomentId.
            console.log(funmomentToShow);
            setFunMoment(funmomentToShow);
        };
        getData();
    }, [funmomentId]);
    // Verifying the funmoment state is set correctly:
    console.log('funmoment state:', funmoment);

    return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;