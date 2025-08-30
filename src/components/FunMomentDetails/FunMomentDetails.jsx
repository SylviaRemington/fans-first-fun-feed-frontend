import { useParams } from "react-router";

const FunMomentDetails = () => {
    const params = useParams;
    console.log(params);

  return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;