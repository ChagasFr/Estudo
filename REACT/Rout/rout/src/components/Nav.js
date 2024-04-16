import React, { useEffect } from 'react'
import AuthButton from '../components/authButton'

import { useSelector } from 'react-redux-dom'
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function Nav(props) {
    const login = useSelector(state => state)

    const history = useHistory();
    const location = useLocation

    useEffect(() => {
        let { from } = location.state || { from:{pathname: '/'} }
        if(login) {
            history.replace(from)
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