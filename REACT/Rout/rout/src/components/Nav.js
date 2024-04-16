import React, { useEffect } from 'react'
import AuthButton from '../components/authButton'

import { useSelector } from 'react-redux-dom'
import { Link, useHistory } from 'react-router-dom'

export default function Nav(props) {
    const login = useSelector(state => state)

    const history = useHistory();

    useEffect(() => {
        if(login) {
            history.push('/')
        }
    }, [login])

    return (<nav className="nav">
        <h1>Chagas</h1>
        <ul className='nav-links'>
            <AuthButton></AuthButton>
            <li><Link to="/aulas"></Link>aulas</li>
            <li><Link to="/sobre"></Link>sobre</li>
        </ul>

    </nav>)
}