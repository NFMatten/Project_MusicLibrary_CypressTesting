import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" placeholder="Search Table For..." onChange={(event) => props.filterSongs(event)} />
        </div>
    );
}
 
export default SearchBar;