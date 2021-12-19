import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    // let [loginStatus, setLoginStatus] = useState(false);
    let [loginRole, setLoginRole] = useState(false);

    useEffect(() => {
     //   setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setLoginRole(sessionStorage.getItem('whoIsLoggedIn'));
    }, []);

    // eslint-disable-next-line
    if (loginRole=='ADMIN') {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/home">
                            <div class="text-white">
                                <h3>WomenEmpowerment</h3>
                            </div>
                        </Link>
                    <div class="container">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedbackcomponent" >Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/schemecomponent" >Scheme</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/trainingcoursecomponent" >Training-Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/traineecomponent" >Trainee</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/ngocomponent" >Ngo</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    // eslint-disable-next-line
    else if(loginRole=='USER'){
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">

                        <Link className="navbar-brand" to="/home">
                            <div class="text-white">
                                <h3>WomenEmpowerment</h3>
                            </div>
                        </Link>
                        
                    <div class="container">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userfeedbackcomponent" >Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userschemecomponent" >Scheme</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/usertrainingcoursecomponent" >Training-Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/usertraineecomponent" >Trainee</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/userngocomponent" >Ngo</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">

                        <Link className="navbar-brand" to="/home">
                            <div class="text-white">
                                <h3>WomenEmpowerment</h3>
                            </div>
                        </Link>

                    <div class="container">
                          
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/adminlogin" >AdminLogin</Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;









// import { Link } from "react-router-dom";
// const Header = () => {

//     return (
//         <header class="header sticky-top">
//             <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container">
//                     <Link className="navbar-brand" to="/">
//                         <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                             height="24px" alt="Capgemini" />
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav ml-auto">
//                             {/* <li className="nav-item">
//                                 <Link className="nav-link" to="/hello" >Hello</Link>
//                             </li> */}
//                             {/* <li className="nav-item">
//                                 <Link className="nav-link" to="/emp" >Emp</Link>
//                             </li> */}
//                             {/* <li className="nav-item">
//                                 <Link className="nav-link" to="/dep" >Dep</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/spring" >Spring</Link>
//                             </li> */}
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/#" >Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login" >Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/#" >Logout</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


// export default Header;




// // //import { Link } from 'react-router-dom';
// // //import React, {useEffect,useState} from 'react';
// // const Header = () => {
// //     return(
// //         <div>Header Component</div>
            
// //     );
// // }
// // export default Header;