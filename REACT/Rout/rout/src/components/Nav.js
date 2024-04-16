import React from 'react'
import AuthButton from '../components/authButton'

import { useSelector } from 'react-redux-dom'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    const login = useSelector(state => state)

    return (<nav className="nav">
        <h1>Chagas</h1>
        <ul className='nav-links'>
            <li><Link to="/aulas"></Link>aulas</li>
            <li><Link to="/sobre"></Link>sobre</li>
        </ul>

    </nav>)
}