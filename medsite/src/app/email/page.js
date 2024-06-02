'use client'

import React, { Fragment, useEffect } from "react"

import { useSearchParams } from "next/navigation"

function MessagePage() {
    
    const router = useSearchParams()
    
    let name = router.get("name")
    let email = router.get("email")
    let message = router.get("message")

    useEffect(() => {
        document.title = `Email Message From ${name}`
    })

    return (
        <Fragment>
            <h1> {name}</h1>
            <h2>{email}</h2>
            <p>{message}</p>
        </Fragment>
    )
}

export default MessagePage;