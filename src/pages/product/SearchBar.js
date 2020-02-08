import React from 'react';

export const SearchBar = (props) => {
    return (
        <>
            <input placeholder="Search..." value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/><br/>
            <input type="checkbox"/>Only show products in stock
        </>
    );
}