import { useRouteError } from "react-router-dom";
const Error = () => {
    { /* useRouterError is an hook that is provided by the router and it helps us to discride the error in more detailed way */ }
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Somthing went wrong</h2>
            <h3>{error.status} :- {error.statusText}</h3>
        </div>
    )
}
export default Error;