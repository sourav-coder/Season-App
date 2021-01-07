import React from "react";
import Season from "./Components/Season"
import Spinner from "./spinner"

class App extends React.Component {
  constructor(props) {
    // super is used to get the properties of the constructor of React 
    super(props);
    this.state = {
      lat: null, 
      errorMessage: "",
    };
  }


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      // get the position
      (position) => {
        this.setState({
          lat: position.coords.latitude
        });
      },

      (err) => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }


  render() {

    if(this.state.message && !this.state.lat){
        return <h1>Error:{this.state.errMessage}</h1>
    }
    if(!this.state.errorMessage && this.state.lat){
      return     <Season lat={this.state.lat}></Season>
    }
    else{
      return <Spinner />
    }

   
  }
}

export default App;
