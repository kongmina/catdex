import React from 'react';
import '../searchbar/search-box.styles.css'

export const SearchBar = ({ placeholder, handleChange }) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange} />
    )
}