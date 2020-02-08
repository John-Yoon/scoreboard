import React from 'react';

export const SearchBar = (props) => {
    return (
        <>
            <input placeholder="Search..."/><br/>
            <input type="checkbox"/>Only show products in stock
        </>
    );
}