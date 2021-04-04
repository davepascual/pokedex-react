import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pokemons" exact>Pokemons</NavLink>
                    </li>
                    <li>
                        <NavLink to="" exact>Link</NavLink>
                    </li>
                    <li>
                        <NavLink to="" exact>Link</NavLink>
                    </li>
                    <li>
                        <NavLink to="" exact>Link</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
