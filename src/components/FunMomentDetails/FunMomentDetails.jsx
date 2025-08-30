import { useParams, useEffect } from "react-router";
import * as funmomentService from '../../services/funmomentService';

const FunMomentDetails = () => {
    const params = useParams;
    console.log(params.id);

    useEffect(() => {
        const funmomentToShow = await funmomentService.show()
    })

  return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;