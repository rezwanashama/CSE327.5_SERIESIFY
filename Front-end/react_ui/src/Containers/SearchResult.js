import React, { Component } from 'react'
import SeriesListView from './SeriesListView'
export class SearchResult extends Component {


    render() {
        //Gets the SearchQuery from the url
        const query = this.props.match.params.searchQuery;

        return (
            <div>
                <SeriesListView header={this.props.header} apicall= {`https://api.themoviedb.org/3/search/tv?api_key=a5c1a2920eaf594c07fef4fe581f2166&language=en-US&query=${query}&page=1`} />
            </div>
        )
    }
}

export default SearchResult
