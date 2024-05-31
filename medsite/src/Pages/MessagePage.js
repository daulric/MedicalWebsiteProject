import React from "react";

import {useSearchParams } from "react-router-dom"

function MessagePage() {

    const [searchParams] = useSearchParams()

    let name = searchParams.get('name')
    let email = searchParams.get('email')
    let message = searchParams.get('message')

    return (
        <React.Fragment>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <p>{message}</p>
        </React.Fragment>
    )
}

export default MessagePage;