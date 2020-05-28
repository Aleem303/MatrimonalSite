import React from 'react';
import Home from './containers/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import AboutUS from './containers/AboutUs';
import Footer from './components/Footer';
import Matrimony from './containers/Matrimony';
import SignUPForm from './components/SignUpForm';
import SignInForm from './components/SignInForm/index';



const App = () => {
  return (
    <div className="App">
   
    
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/post/:slug" component={Post} />
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/about-us"  component={AboutUS}/>
        <Route path="/matrimony"  component={Matrimony}/>
        <Route path="/matrimony/signup"  component={SignUPForm}/>
        
        

        <Footer/>     
    </Router> 
    
    </div>
  );
}

export default App;
