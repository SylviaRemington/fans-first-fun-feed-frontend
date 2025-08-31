import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import * as funmomentService from './services/funmomentService';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import FunMomentList from './components/FunMomentList/FunMomentList';
import FunMomentDetails from './components/FunMomentDetails/FunMomentDetails';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  // creating a new useState()
  const [funmoments, setFunMoments] = useState([]);

  // need to set up a useEffect hook that will fetch the data
  // useEffect(() => {
    // in here is where it will fetch the funmoments
    // and when fetch the funmoments, gonna need state
  // }, []);

  // Using our effect to trigger index() service function:
  useEffect(() => {
    const fetchAllFunMoments = async () => {
      const funmomentsData = await funmomentService.index();
  
      // console log to verify
      console.log('funmomentsData:', funmomentsData);
      setFunMoments(funmomentsData);
    };
    if (user) fetchAllFunMoments();
  }, [user]);
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        {/* Protected Route below /funmoments that is only available if you are signed in as a user. */}
        {/* Need to pass the FunMoments data in into the FunMomentList component. */}
        <Route path='funmoments' element={<FunMomentList funmoments={funmoments} />} />
        <Route path="/funmoments/:id" element={<FunMomentDetails/>} />
        <Route path='/funmoments/new' element={<p>New Fun Moment</p>} />
      </Routes>
    </>
  );
};

export default App;




