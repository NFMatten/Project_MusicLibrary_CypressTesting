import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" placeholder="Search Table For..." onChange={(event) => props.filterSongs(event)} data-cy='search-bar'/>
        </div>
    );
}
 
export default SearchBar;