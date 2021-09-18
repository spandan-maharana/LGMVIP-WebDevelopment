import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDateLoaded,setIsDateLoaded] = React.useState(false);
  const [userData,setUserData] = React.useState([]);
  const [isButtonClicked,setisButtonClicked] = React.useState(false);
  const handleClicked=()=>{
    setisButtonClicked(true);
    fetch("https://reqres.in/api/users?page=1").then((response)=>response.json()).then((res)=>{setUserData(res.data);
  setInterval(()=>{
    setIsDateLoaded(true);
  },1700);
})
.catch((err)=>{
  console.log(err);
});
  };
  return (<>
  <Router>
    <section className="container">
      <div class="nav" id="mynav">
        <a rel="noreferrer" href="" class="active">
          ZIPPY
        </a>
        <a href="#getusers" class="btn" onClick={handleClicked}>
          GET USERS
        </a>
      </div>
      <div className="container1">
        <div className="row justify-content-center">
          {isButtonClicked?(
            isDateLoaded?(
              <Cards userData={userData} />
            ):(
              <div class="loader"></div>
            )
          ):(
            <div className="intro">
              <p>Hi, Welcome to Zippy. This is a photoshop image of the website. Lorem Ipsum Dolor Sit.</p>
            </div>
          )}
        </div>
      </div>
    </section>
    <section>
      <Footer />
    </section>
  </Router>
    </>
  );
}

export default App;
