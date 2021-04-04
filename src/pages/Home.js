import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="center" style={{flexDirection:'column', height: '100vh'}}>
                <h1 style={{ color: '#333', fontSize: '2rem'}}>Get to know better of Poke`mon </h1>
                <a href="/pokemons" className="btn" style={{width: 'auto'}}>Know them better</a>
            </div>
        </div>
    )
}

export default Home
