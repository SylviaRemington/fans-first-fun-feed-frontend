import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router";
import CommentForm from "../CommentForm/CommentForm";
import * as funmomentService from "../../services/funmomentService";

import { UserContext } from "../../contexts/UserContext";

const FunMomentDetails = ({ handleDeleteFunMoment }) => {
  // Setting up the useContext & UserContext here:
  const { user } = useContext(UserContext);

  // Original Version:
  // const params = useParams();
  // console.log(params.id);

  const { id } = useParams();

  // The 'funmoment' in the state is what I'll be using in my return:
  const [funmoment, setFunMoment] = useState(null);
  // const funmomentId = params.id;

  // Addtl Version
  // const { id } = useParams;
  // console.log(id);

  useEffect(() => {
    // Setting up our data fetching function & call the show function with that id (because the funmomentService needs the id for the show function)
    const getData = async () => {
      // const funmomentToShow = await funmomentService.show(funmomentId); //!check this id part to make sure I don't need funmomentId instead. Was originally params.id & I changed it; but not sure if it should have been params.funmomentId.
      const funmomentToShow = await funmomentService.show(id);
      console.log(funmomentToShow);
      setFunMoment(funmomentToShow);
    };
    getData();
  }, [id]);

  const handleAddComment = async (commentFormData) => {
    const newComment = await funmomentService.createComment(id, commentFormData);
    // the spread funmoment, updating the comments with the existing ones, and then the new one
    // Spreading in the original funmoment, taking the comments on the funmoment, spreading the original comments and adding the newComment.
    setFunMoment({...funmoment, comments: [...funmoment.comments, newComment] });
  };

  const deleteFunMoment = () => {
    handleDeleteFunMoment(id);
  }

  // Verifying the funmoment state is set correctly:
  console.log("funmoment state:", funmoment);

  if (!funmoment) return <main>Loading...</main>;

  // Original return used:
  // return <main>Fun Moment Details</main>;

  // Updated return I'm using now:
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
          {/* Currently just working on delete functionality of comments. */}
          {/* This is where I will create delete functionality for the funmoment. */}
          {funmoment.author._id === user._id && (
            <>
            {/* <Link to={`/funmoments/${id}/edit`}>Edit</Link> */}
            <Link to={`/funmoments/${id}/edit`} className="button">Edit</Link>
            <button onClick={deleteFunMoment}>Delete</button>
            </>
          )}
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
        {/* This is going to call the funmomentService, get the newComment and then will set the new state of the fun moment. */}
        <CommentForm handleAddComment={handleAddComment} />

        {/* THIS LINE BELOW I MIGHT TAKE OUT ONCE I'VE FULLY FINISHED THE APP. */}
        {!funmoment.comments.length && (
          <p>
            There are no comments currently. Be the first to comment! Yuuus.
          </p>
        )}

        {funmoment.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
              {comment.author._id === user._id && (
                <>
                  <button>Delete</button>
                </>
              )}
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default FunMomentDetails;
