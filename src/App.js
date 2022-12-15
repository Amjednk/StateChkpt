import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import FullName from './Components/Profile/FullName';
import Navigation from './Components/Navigation';
import LoginForm from './Components/LoginForm';
import Button from 'react-bootstrap/Button';
import myPhoto from './Components/Profile/Myphoto.png';
import Timer from './Components/Timer';

export default class App extends React.Component {
constructor(){
  super();
this.state = {
  person:   {
    fullName : "Amjed Kamoun", 
    bio:"Consultancy services in Digital Transformation and Operations Management", 
    profession : "Business Consultant", 
    imgSrc: myPhoto,
  },
  show : false,
}
}
displayInfo = () => { this.setState({show : !this.state.show,});
};
render(){
  const styleObject = {textAlign: "center"};
  const handleName = () => {
    alert (`You are logged in as ${FullName()}`);
  }
  return (
    <div>
      <Navigation />
      <hr/>
      <div style = {styleObject}>
        <hr/>
        {this.state.show &&
        <div> 
          <img className="myPhotoSize"  src={this.state.person.imgSrc} alt ="User_Photo" />
          <h3> {this.state.person.fullName} - {this.state.person.profession} </h3>
          <h5 style = {{color: "skyblue"}}>{this.state.person.bio}</h5>
          <Button variant="primary"  onClick={handleName}>User Check</Button>
          <hr/>
        </div>}
        <Button variant="primary"  onClick={this.displayInfo}>{this.state.show ? "Hide Profile" : "Show Profile" } </Button>
        <Timer/>
      </div>
      
      <div className = "position1">
        <LoginForm /> 
      </div>
    </div>
  );
}

}