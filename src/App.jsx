import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import * as funmomentService from "./services/funmomentService";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import FunMomentList from "./components/FunMomentList/FunMomentList";
import FunMomentDetails from "./components/FunMomentDetails/FunMomentDetails";
import FunMomentForm from "./components/FunMomentForm/FunMomentForm";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const navigate = useNavigate();
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
      console.log("funmomentsData:", funmomentsData);
      setFunMoments(funmomentsData);
    };
    if (user) fetchAllFunMoments();
  }, [user]);

  //Handle function
  // My handleAddFunMoment needs to accept formData.
  const handleAddFunMoment = async (formData) => {
    try {
      // creating new fun moment with funmomentService with the formData & then navigate to hoots
      const newFunMoment = await funmomentService.create(formData);
      // console.log("SUCCESS", newFunMoment);
      navigate('/funmoments');
      setFunMoments([newFunMoment, ...funmoments]);
    } catch (error) {
      console.log(error);
    }
  };
  // Addtl handle function (version from class if I'd like to use that instead)
  // const handleAddFunMoment = async (funmomentFormData) => {
  //   console.log("funmomentFormData", funmomentFormData);
  //   navigate("/funmoments");
  // };

  // Delete FunMoment function
  const handleDeleteFunMoment = async (funmomentId) => {
    try {
      const deletedFunMoment = await funmomentService.deleteFunMoment(funmomentId);
      console.log(deletedFunMoment);
      navigate("/funmoments");
      const updatedFunMoments = funmoments.filter((funmoment) => funmoment._id !== funmomentId);
      setFunMoments(updatedFunMoments);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        {/* Protected Route below /funmoments that is only available if you are signed in as a user. */}
        {/* Need to pass the FunMoments data in into the FunMomentList component. */}
        <Route path="funmoments" element={<FunMomentList funmoments={funmoments} />} />
        <Route path="/funmoments/:id" element={<FunMomentDetails handleDeleteFunMoment={handleDeleteFunMoment} />} />
        <Route path="/funmoments/new" element={<FunMomentForm handleAddFunMoment={handleAddFunMoment} />} />
      </Routes>
    </>
  );
};

export default App;
