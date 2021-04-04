import React from 'react'

const SearchBar = ({parentFunc}) => {
    return (
        <div>
            <input type="text" className="input" onInput={parentFunc}/>
        </div>
    )
}

export default SearchBar
