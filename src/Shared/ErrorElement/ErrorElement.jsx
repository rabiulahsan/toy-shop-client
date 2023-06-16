/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  //   console.log(status);
  console.log(error);
  return (
    <div className="w-full h-[710px]">
      <img
        className="h-full w-full"
        src="https://ipx-cdn.lottiefiles.com/X8T2hwy9tg623aiXImlKnvixcScV-N66PGhmJsqUeQ8/fill/1200/600/no/0/aHR0cHM6Ly9kM2psNzY5b3k2OXk3Yi5jbG91ZGZyb250Lm5ldC8yMDIyLzA4LzQwNC1QYWdlLUJsb2ctQ292ZXIucG5n.jpg"
        alt=""
      />
    </div>
  );
};

export default ErrorElement;
