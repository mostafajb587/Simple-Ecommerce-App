import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>OPPS</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "this page does not exsist "
          : "an un expected error occurred ."}{" "}
      </p>
    </>
  );
};

export default ErrorPage;
