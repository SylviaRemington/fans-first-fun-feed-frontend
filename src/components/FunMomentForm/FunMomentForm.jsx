import { useState, useEffect } from "react";
import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import * as funmomentService from "../../services/funmomentService"; //changed and moved this to App.jsx previously


const FunMomentForm = ({
  handleAddFunMoment, handleUpdateFunMoment, funmoments,}) => {
  // Destructure funmomentId from the useParams hook, and console log it
  // const { funmomentId } = useParams();
  // console.log(funmomentId);

  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "Trick Plays",
  });

  useEffect(() => {
    if (id && funmoments) {
      const funmoment = funmoments.find((fm) => fm._id === id);
      if (funmoment) {
        setFormData({
          title: funmoment.title,
          text: funmoment.text,
          category: funmoment.category,
        });
      }
    }
  }, [id, funmoments]);

  //handleChange function
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("formData", formData);
    if (id) {
      handleUpdateFunMoment(id, formData);
    } else {
      handleAddFunMoment(formData);
    }
  };

  return (
    <main>
      {/* Adding a heading */}
      <h1>{id ? "Edit Fun Moment" : "New Fun Moment"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>

        {/* This below handles the enum for the category between the select tags. */}
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Trick Plays">Trick Plays</option>
          <option value="Cool Dances">Cool Dances</option>
          <option value="Songs Sung">Songs Sung</option>
          <option value="Individual Players">Individual Players</option>
          <option value="Dad Bod Squad">Dad Bod Squad</option>
          <option value="Princess">Princess</option>
          <option value="Umpire Moves">Umpire Moves</option>
          <option value="Mascot">Mascot</option>
          <option value="Funny Audience Games">Funny Audience Games</option>
        </select>

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default FunMomentForm;

//------------------------------------------------------------------------------------

// Reminder to self for future apps:
// When first start the code, using a super simple function to make sure code and route is working to browser.
// const FunMomentForm = () => {
//      return <p>This is the hoot form.</p>
// }
// export default FunMomentForm;

