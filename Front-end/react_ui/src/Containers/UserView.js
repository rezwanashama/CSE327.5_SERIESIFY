import React from "react";
import axios from "axios";
import User from "../Components/User";
import {connect} from 'react-redux'

class UserView extends React.Component {
    constructor() {
      super();
      this.state = {
        User: [] 
    }
    };

  componentWillReceiveProps(newProps){
    if(newProps.token){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + newProps.token
    };

    axios.get("http://127.0.0.1:8000/api/userv/",{headers})
    .then(res => {
      this.setState({
        User: res.data
      });
    });
    }
  
  }


  render() {
    return (
      <div>
          
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token : state.token
  }
}


export default connect(mapStateToProps)(UserView);