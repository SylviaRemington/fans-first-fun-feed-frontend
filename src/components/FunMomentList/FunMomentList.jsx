// The commented out info is a reference so that I fully know what a Fun Moment looks like (from Postman)
// For reference when I write code.

// {
//     "title": "Dad Cheers",
//     "text": "The Text About the Fun Moment",
//     "category": "Dad Bod Squad",
//     "author": {
//         "username": "Sylvia",
//         "_id": "68ac31ad81b4b709807a6a99"
//     },
//     "_id": "68b30e4acc19eadcc421b9f6",
//     "comments": [],
//     "createdAt": "2025-08-30T14:44:27.006Z",
//     "updatedAt": "2025-08-30T14:44:27.006Z",
//     "__v": 0
// }


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

