import ErrorLayout from "../layout/errorLayout";

export default function NotFound() {
  return <ErrorLayout 
    statusCode={404} 
    title={"Page not found"} 
    description={"Sorry, we couldn’t find the page you’re looking for."} 
  />
}
