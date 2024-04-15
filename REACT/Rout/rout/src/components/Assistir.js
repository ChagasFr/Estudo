import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {
    const query = useQuery()

    useEffect(() => {
        console.log(query.get("v"))
    })

    return (
        <div className="page">
            <iframe width="560" height="315" src={`{http://www.youtube.com/embed/-534awd} ${query.get('v')}`} frameborder="0" allow="accelerometer; autoplay; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}