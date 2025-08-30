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
        const getData = async () => {
            const funmomentToShow = await funmomentService.show(params.id);
            console.log(funmomentToShow);
        };
        getData();
    }, []);

    return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;