# Fans First Fun Feed - Frontend 

## User stories

**Below are the user stories I will implement within my FunMoment:**

- As a guest, I should be able to create an account.
- As a new user with an account, I should be able to log in to my account.
- As a user, I should be able to create a funmoment post.
- As a user, I should be able to see a list of all funmoments on a ‘List’ page.
- As a user, clicking on a funmoment in the ‘List’ page should navigate me to a funmoment’s ‘Details’ page to view information about a single funmoment post and its associated comments.
- As a user, I should be able to add a comment on a funmoment’s ‘Details’ page.
- As the author of a funmoment, I should see a link to ‘Edit’ a funmoment on the ‘Details’ page. Clicking on the link should direct me to an ‘Edit’ page where I can modify the funmoment. Upon submitting the update, I should be redirected back to the ‘Details’ page.
- As the author of a funmoment, I should see a button to ‘Delete’ a funmoment on the ‘Details’ page. Clicking the button should delete the funmoment and redirect me back to the ‘List’ page.

**The above user stories give me a good idea of what CRUD operations a user might want to perform in my app, and I will be coding accordingly to these User Stories.**

## Component hierarchy diagram
- After reviewing the user stories, my next step is to map out the component structure of my React app. For this, I’ll utilize a Component Hierarchy Diagram. This visual tool will act as an outline of the tree structure in the client-side part of the app.

**Below is the component hierarchy diagram for the MVP build of FunMoment:**

Component hierarchy diagram

(Notice how most of my components will require a client-side route. This is because I will treat these components as distinct pages in my app. Components not marked as requiring a route will be used as subcomponents making up the UI of a page.)