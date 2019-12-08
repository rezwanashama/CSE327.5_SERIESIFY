import React from "react";
import axios from "axios";
import Watchlist from "../Components/Watchlist";
import {connect} from 'react-redux'

class WatchlistView extends React.Component {
    constructor() {
      super();
      this.state = {
        Watchlist: [] 
    }
    };

  componentWillReceiveProps(newProps){
    if(newProps.token){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + newProps.token
    };

    axios.get("http://127.0.0.1:8000/api/watchlist/",{headers})
    .then(res => {
      this.setState({
        Watchlist: res.data
      });
    });
    }
  
  }


  render() {
    return (
      <div>
          <Watchlist data={this.state.Watchlist} /> <br />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token : state.token
  }
}


export default connect(mapStateToProps)(WatchlistView);