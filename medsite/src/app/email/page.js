import { Fragment} from "react"

function MessagePage(props) {
    const useSearchParams = props.searchParams
    
    let name = useSearchParams.name
    let email = useSearchParams.email
    let message = useSearchParams.message

    return (
        <Fragment>
            <h1> {name}</h1>
            <h2>{email}</h2>
            <p>{message}</p>
        </Fragment>
    )
}

export default MessagePage;