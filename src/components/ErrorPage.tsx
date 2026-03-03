import { useRouteError,isRouteErrorResponse } from "react-router-dom";
const ErrorPage = ()=>{
    const err= useRouteError();
    if(isRouteErrorResponse(err)){
         return (
        <>
            <h1>Oops!!</h1>
            <h2>Somethign Went Wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </>
        )
    }
    return (
    <>
      <h1>Oops!!</h1>
      <h2>Unexpected error</h2>
    </>
  );
};

export default ErrorPage;