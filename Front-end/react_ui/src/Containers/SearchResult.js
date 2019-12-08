import React, { Component } from 'react'
import SeriesListView from './SeriesListView'
export class SearchResult extends Component {


    render() {
        //Gets the SearchQuery from the url
        const query = this.props.match.params.searchQuery;

        return (
            <div>
                
            </div>
        )
    }
}

export default SearchResult
