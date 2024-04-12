import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (<nav className="nav">
        <h1>Chagas</h1>
        <ul className='nav-links'>
            <li><Link to="/aulas"></Link>aulas</li>
            <li><Link to="/sobre"></Link>sobre</li>
        </ul>

    </nav>)
}