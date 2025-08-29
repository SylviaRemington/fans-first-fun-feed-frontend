import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import * as funmomentService from './services/funmomentService';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import FunMomentList from './components/FunMomentList/FunMomentList';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        {/* Protected Route below /funmoments that is only available if you are signed in as a user. */}
        <Route path='funmoments' element={<FunMomentList />}></Route>
      </Routes>
    </>
  );
};

export default App;

