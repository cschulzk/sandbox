import ErrorLayout from "../layout/errorLayout";

export default function ServerError() {
  return <ErrorLayout 
    statusCode={500} 
    title={"Server Error"} 
    description={"Sorry, the server had a hiccup, try again in minute."} 
  />
}
