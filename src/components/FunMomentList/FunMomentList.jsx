import { Link } from 'react-router';

// Starting with simple function to check to make sure everything is working:
const FunMomentList = ({ funmoments }) => {
  // return <main>Fun Moment List</main>;
  // update the UI in FunMomentList to show any data/funmoments that comes back
  return (
    <main>
      {funmoments.map((funmoment) => (
        // turning each component into a link & configuring the link
        // Link is the othermost element of when you map
        <Link key={funmoment._id} to={`/funmoments/${funmoment._id}`}>
          <article>
            <header>
              <h2 className="funmoment-title">{funmoment.title}</h2>
              <p>
                {`${funmoment.author.username} posted on
                ${new Date(funmoment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{funmoment.text}</p>
          </article>
        </Link>
      ))}

    </main>
  );
};

export default FunMomentList;



















// Note #1:
// checked and my component is working after creating this, importing into App.jsx & then creating a Route path with an element.


// Note #2:
// The commented out info below is a reference so that I fully know what a Fun Moment looks like (from Postman)
// This is for reference when I write this code. And I'm leaving this in so that it reminds me what I did when I write future React apps.

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