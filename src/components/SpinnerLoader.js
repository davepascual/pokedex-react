import React from 'react'
import pokeBall from '../images/pokeball-big.png'

const SpinnerLoader = () => {
    return (
        <div className="loader-content">
            <img src={pokeBall} alt="Pokeball spinner" className="spin-loader"/>
            <p style={{color:'white', fontSize: '2rem'}}>Loading . . .</p>
        </div>
    )
}

export default SpinnerLoader
