import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import CommentForm from "../CommentForm/CommentForm";
import * as funmomentService from "../../services/funmomentService";

import { UserContext } from "../../contexts/UserContext";

const FunMomentDetails = ({ handleDeleteFunMoment, handleUpdateComment, handleDeleteComment, funmoments }) => {
  // Setting up the useContext & UserContext here:
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const { id } = useParams();

  // The 'funmoment' in the state is what I'll be using in my return:
  const [funmoment, setFunMoment] = useState(null);

  useEffect(() => {
    // Setting up data fetching function & call the show function with that id (because the funmomentService needs the id for the show function)
    const getData = async () => {
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
    setFunMoment({ ...funmoment, comments: [...funmoment.comments, newComment] });
  };

  const deleteFunMoment = () => {
    handleDeleteFunMoment(id);
  }

  const editFunMoment = () => {
    navigate(`/funmoments/${id}/edit`);
  }

  const deleteComment = async (commentId) => {
    try {
      console.log('Deleting comment:', id, commentId); // Debug IDs
      await handleDeleteComment(id, commentId);
      // Updating local funmoment state to remove the deleted comment
      setFunMoment({
        ...funmoment,
        comments: funmoment.comments.filter((comment) => comment._id !== commentId),
      });
    } catch (error) {
      console.log('Delete comment error:', error); // debugging
    }
  };

  const handleEditComment = async (funmomentId, commentId, commentData) => {
    try {
      await handleUpdateComment(funmomentId, commentId, commentData);
      const updatedFunMoment = await funmomentService.show(id, { cacheBust: Date.now() });
      setFunMoment(updatedFunMoment);
    } catch (error) {
      console.log('Edit comment error:', error);
    }
  };

  // Verifying the funmoment state is set correctly:
  console.log("funmoment state:", funmoment);

  if (!funmoment) return <main>Loading...</main>;

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
          {funmoment.author._id === user._id && (
            <>
              <button onClick={editFunMoment}>Edit</button>
              <button onClick={deleteFunMoment}>Delete</button>
            </>
          )}
        </header>
        <p>{funmoment.text}</p>
      </section>


      {/* Updated comments section */}
      <section>
        <h2>Comments</h2>

        {/* Putting CommentForm Here */}
        {/* This is going to call the funmomentService, get the newComment and then will set the new state of the fun moment. */}
        <CommentForm handleAddComment={handleAddComment} handleUpdateComment={handleEditComment} funmoments={funmoments} />        {!funmoment.comments.length && (
          <p>
            There are no comments currently. Be the first to comment! Yuuus.
          </p>
        )}

        {funmoment.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p className="comment-author-date">
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
              {comment.author._id === user._id && (
                <>
                  {/* Adding edit button for the comments */}
                  <button onClick={() => navigate(`/funmoments/${id}/comments/${comment._id}/edit`, { state: { text: comment.text } })} className="comment-edit-button">Edit</button>                  <button onClick={() => deleteComment(comment._id)} className="comment-delete-button">Delete</button>
                </>
              )}
            </header>
            <p className="comment-box">{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default FunMomentDetails;

