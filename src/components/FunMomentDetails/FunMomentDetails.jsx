import { useEffect } from "react";
import { useParams } from "react-router";
import * as funmomentService from '../../services/funmomentService';

const FunMomentDetails = () => {
    const { id } = useParams;
    console.log(id);

    // Original Version before the above change:
    // const params = useParams; - Wrong: This assigns the useParams function itself, not its result.
    // console.log(params.id); - This logs undefined because params is the function, not an object.


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