import { useState } from 'react';

const FunMomentForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: 'Trick Plays',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('formData', formData);
    // We'll update this function shortly...
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
