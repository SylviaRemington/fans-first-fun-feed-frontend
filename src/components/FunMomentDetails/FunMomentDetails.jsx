import { useParams } from "react-router";

const FunMomentDetails = () => {
    const params = useParams;
    console.log(params.id);

  return <main>Fun Moment Details</main>;
};

export default FunMomentDetails;