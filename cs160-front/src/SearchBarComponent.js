import React, { Component } from 'react';
import './SearchBarComponent.css'

class SearchBarComponent extends Component {
	render() {
		return (
            <div class = "SearchBarContainer">
                <div class = "SearchBarText">
                    Search for a movie here:
                
                <form action="http://www.youtube.com/results" method="get" target="_blank" >
                <input name="search_query" type="text" maxlength="128" />
                <select name="search_type">
                <option value="">Videos</option>
                </select>
                <input type="submit" value="Search" />
                </form>
                </div>
            </div>
		);
	}
}

export default SearchBarComponent