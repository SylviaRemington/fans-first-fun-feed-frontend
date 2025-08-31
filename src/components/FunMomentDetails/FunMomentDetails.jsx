import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentForm from '../CommentForm/CommentForm';
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

    const handleAddComment = async (comment) => {
      try 
    }

    // Verifying the funmoment state is set correctly:
    console.log('funmoment state:', funmoment);

    if (!funmoment) return <main>Loading...</main>;

    // Original return used:
    // return <main>Fun Moment Details</main>;

    // Updated return using now:
    return (
    <main>
      <section>
        <header>
          <p>{funmoment.category.toUpperCase()}</p>
          <h1>{funmoment.title}</h1>
          <p>
            {`${funmoment.author.username} posted on
            ${new Date(funmoment.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{funmoment.text}</p>
      </section>

      {/* Originally just had this basic comments section. */}
      {/* <section>
        <h2>Comments</h2>
      </section> */}

      {/* Updated comments section */}
      <section>
        <h2>Comments</h2>

        {/* Putting CommentForm Here */}
        <CommentForm />

        {/* THIS LINE BELOW I MIGHT TAKE OUT ONCE I'VE FULLY FINISHED THE APP. */}
        {!funmoment.comments.length && <p>There are no comments currently. Be the first to comment! Yuuus.</p>}

        {funmoment.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>

    </main>
  );
};

export default FunMomentDetails;