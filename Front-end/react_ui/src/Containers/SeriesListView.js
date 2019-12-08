import React, {Component} from 'react'
import axios from 'axios'
import SeriesListComponent from '../Components/SeriesListComponent';

export default class SeriesListView extends Component {

    constructor() {
      super();
      this.state = {
        seriesData: [] 
    }
    };

    componentDidMount() {
      //Other classes passes props to apicall, the call url
      const apicall = this.props.apicall
      axios
        .get(apicall)
        .then(res => {
          // sets the state to the data.results that is fetched from the API
          this.setState({seriesData: res.data.results});
          // console.log(this.state.seriesData);
        })

    }

  render() {

    return (
      <div>
        <SeriesListComponent header={this.props.header} data={this.state.seriesData}/>
      </div>
    )
  }
}
