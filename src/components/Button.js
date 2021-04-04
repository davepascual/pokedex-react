import React from 'react'

const Button = ({isLoading, onClick, text}) => {
    return (
        <button className="btn" onClick={onClick}>
            { isLoading ? 'Loading' : text}
        </button>
    )
}

export default Button
