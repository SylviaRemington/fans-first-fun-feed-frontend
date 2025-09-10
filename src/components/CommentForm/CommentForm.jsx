
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

const CommentForm = ({ handleAddComment, handleUpdateComment, funmoments }) => {
  const [formData, setFormData] = useState({ text: '' });
  const { funmomentId, commentId } = useParams();

  useEffect(() => { // **NEW**: Pre-fill form for edit
  if (funmoments && funmomentId && commentId) {
    const funmoment = funmoments.find(fm => fm._id === funmomentId);
    if (funmoment) {
      const comment = funmoment.comments.find(c => c._id === commentId);
      if (comment) {
        setFormData({ text: comment.text });
      }
    }
  }
}, [funmoments, funmomentId, commentId]); //



  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

const handleSubmit = (evt) => {
  evt.preventDefault();
  // add handleAddComment
  // Need to pass in my handleAddComment into my handleSubmit - put prop onto the comment form but originally didn't call the handleAddComment function in handleSubmit.
  if (funmomentId && commentId && handleUpdateComment) {
    handleUpdateComment(funmomentId, commentId, formData);
  } else if (funmomentId) {
  handleAddComment(funmomentId, formData);
  }
  setFormData({ text: '' });
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text-input'>Your comment:</label>
      <textarea
        className="comment-box" 
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        onChange={handleChange}
      />
      <button type='submit'>{funmomentId && commentId ? 'Update Comment' : 'SUBMIT COMMENT'}</button>
    </form>
  );
};

export default CommentForm;
