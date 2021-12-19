import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home';
import Page404 from './components/Page404';
import Logout from './components/Logout';
import UserSchemeComponent from './components/UserSchemeComponent';
import SchemeComponent from './components/SchemeComponent';
import NgoComponent from './components/NgoComponent';
import UserNgoComponent from './components/UserNgoComponent';
import TrainingCourseComponent from './components/TrainingCourseComponent';
import UserTrainingCourseComponent from './components/UserTrainingCourseComponent';
import FeedbackComponent from './components/FeedbackComponent';
import UserFeedbackComponent from './components/UserFeedbackComponent';
import TraineeComponent from './components/TraineeComponent';
import UserTraineeComponent from './components/UserTraineeComponent';



const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />                       {/*  Header will look everytime */}
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/logout"> <Logout /> </Route>
                            <Route path="/schemecomponent"> <SchemeComponent /> </Route>
                            <Route path="/userschemecomponent"> <UserSchemeComponent /> </Route>

                            <Route path="/ngocomponent"> <NgoComponent /> </Route>
                            <Route path="/userngocomponent"> <UserNgoComponent /> </Route>

                            <Route path="/trainingcoursecomponent"> <TrainingCourseComponent /> </Route>
                            <Route path="/usertrainingcoursecomponent"> <UserTrainingCourseComponent /> </Route>

                            <Route path="/feedbackcomponent"> <FeedbackComponent /> </Route>
                            <Route path="/userfeedbackcomponent"> <UserFeedbackComponent /> </Route>

                            <Route path="/traineecomponent"> <TraineeComponent /> </Route>
                            <Route path="/usertraineecomponent"> <UserTraineeComponent /> </Route>

                            <Route path="/*"> <Page404 /> </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Routes;