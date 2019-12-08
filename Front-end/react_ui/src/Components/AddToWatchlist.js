import React from "react";
import axios from "axios";

import {connect} from 'react-redux'

class AddToWatchlist extends React.Component {
  constructor() {
    super();
    this.state = {
      Watchlist: [] 
  }
  };


  async pushSeries() {
    
    let newState = await JSON.parse(JSON.stringify(this.state));
    newState.Watchlist.series.push(
      {
          first_air_date: "2019-08-08 15:52:26.806561+00:00",
          name: "dny",
          overview: "2019-08-08 dny:52:26.812544+00:00",             
          poster_path: "2019-08-d fndy15:52:26.817531+00:00", 
          tmd_id: "nfcfc"
      }

    );
    console.log(newState)
    this.setState(newState)
    console.log("state updated")
    console.log(this.state)

  }


async componentWillReceiveProps(newProps){
  if(newProps.token){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + newProps.token
    };

    await axios.get("http://127.0.0.1:8000/api/watchlist/7",{headers})
          .then(res => {
            console.log(res.data)
            this.setState({
              Watchlist: res.data
          });
          });

    await this.pushSeries();
    await console.log(this.state.Watchlist)

    await axios.put('http://127.0.0.1:8000/api/watchlist/7/', 
            // id: this.state.Watchlist.id,
            // name: this.state.Watchlist.name,
            // series: this.state.Watchlist.series,             
            // user: this.state.Watchlist.user, 
            this.state.Watchlist
          ,{headers})
          .then(res => {
              console.log(res)
              console.log(this.state.Watchlist)
          },)




          
  }
      //google sequential api request
            //set time out

}



  render() {
    return (
      <div>
        {console.log(this.state.Watchlist)} 
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token : state.token
  }
}


export default connect(mapStateToProps)(AddToWatchlist);