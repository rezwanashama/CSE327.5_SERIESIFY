import React, { Component } from 'react'
import SeriesListView from './SeriesListView'

export default class Trending extends Component {
    render() {
        return (
            <div>
                <SeriesListView header="Trending" apicall={'https://api.themoviedb.org/3/trending/tv/week?api_key=a5c1a2920eaf594c07fef4fe581f2166'}/>

            </div>
        )
    }
}
