import { useState } from 'react';
import * as funmomentService from "../../services/funmomentService";

// When first start the code, using a super simple function to make sure code and route is working to browser.
// const FunMomentForm = () => {
//      return <p>This is the hoot form.</p>
// }
// export default FunMomentForm;

const FunMomentForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: 'Trick Plays',
  });

  //handleChange function
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  //handleSubmit function
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log('formData', formData);

    try {
        const newFunMoment = await funmomentService.create(formData)
        console.log('SUCCESS', newFunMoment)
    } catch (error) {
        console.log(error);
    }

  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title-input'>Title</label>
        <input
          required
          type='text'
          name='title'
          id='title-input'
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor='text-input'>Text</label>
        <textarea
          required
          type='text'
          name='text'
          id='text-input'
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor='category-input'>Category</label>

        {/* This below handles the enum for the category between the select tags. */}
        <select
          required
          name='category'
          id='category-input'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Trick Plays'>Trick Plays</option>
          <option value='Cool Dances'>Cool Dances</option>
          <option value='Songs Sung'>Songs Sung</option>
          <option value='Individual Players'>Individual Players</option>
          <option value='Dad Bod Squad'>Dad Bod Squad</option>
          <option value='Princess'>Princess</option>
          <option value='Umpire Moves'>Umpire Moves</option>
          <option value='Mascot'>Mascot</option>
          <option value='Funny Audience Games'>Funny Audience Games</option>
        </select>

        <button type='submit'>SUBMIT</button>
      </form>
    </main>
  );
};

export default FunMomentForm;
