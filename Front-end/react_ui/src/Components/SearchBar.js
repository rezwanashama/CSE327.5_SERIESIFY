import React, { Component } from 'react'
import {Input ,AutoComplete } from 'antd';
const { Search } = Input;
export default class SearchBar extends Component {

    render() {
        return (
                
            <div>
                    <Search
                        style={{ width: AutoComplete ,marginTop:10}}
                        placeholder="Search TV Series"
                        enterButton="Search"
                        size="large"
                        // changes the url to /searchResult/searchQuery and searchResult.js gets the searchQuery
                        onSearch={value => window.location.href=("/searchResult/" + value)} 
                    />

            </div>
        )
    }
}

