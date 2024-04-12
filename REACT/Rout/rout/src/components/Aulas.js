import React from "react";
import data from '../Data'
import { Link } from "react-router-dom";

export default function Aulas(props) {
    return (
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map (aula =>
                    <li key = { aula.id }><Link className="link">{ aula.title }</Link></li> 
                )}
            </ul>
        </div>
    )
}