import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'

export default function Aula(props) {
    const params = useParams()

    const [aula, setAula] = useState ({})

    useEffect(() => {

    }, [params])
    return (
        <div className="page">
            <h1>Title</h1>
            <h3>Title</h3>
        </div>
    )
}