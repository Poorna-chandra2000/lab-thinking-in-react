import React from "react";

function SearchBar(props) {

    return (
        <div className="search-bar">
            <p>Search</p>
            <input type="text" placeholder="search for products" id="search" value={props.searchQuery} onChange={(e) => props.onSearchChange(e.target.value)} />
            <div className="checkBox-container">
                <input type="checkbox" id="check-box" checked={props.checked} onChange={props.onCheckChange} />
                <span>Only show products available</span>
            </div>
        </div>
    )
}

export default SearchBar;