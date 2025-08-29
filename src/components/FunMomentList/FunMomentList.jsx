// Starting with simple function to check to make sure everything is working
const FunMomentList = ({ funmoments }) => {
  // return <main>Fun Moment List</main>;
  // update the UI in FunMomentList to show any data/funmoments that comes back
  return (
    <main>
      {funmoments.map((funmoment) => (
        <p key={funmoment._id}>{funmoment.title}</p>
      ))}
    </main>
  );
};

export default FunMomentList;


// checked and my component is working after creating this, importing into App.jsx & then creating a Route path with an element.

