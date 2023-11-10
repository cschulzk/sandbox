import Button from "sandbox-lib/general/buttons/Button";

const containerStyle = 'flex flex-col h-screen w-screen justify-center items-center bg-zinc-50 dark:bg-black';
const codeStyle = 'text-3xl font-semibold text-zinc-400 dark:text-zinc-500';
const titleStyle = 'mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl';
const descriptionStyle = 'mt-4 text-xl text-zinc-600 dark:text-zinc-400';

const ErrorLayout = ({
  statusCode,
  title,
  description,
}: {
  statusCode: number,
  title: string,
  description: string,
}) => {
  return (
    <div className={`${containerStyle}`}>
      <p className={`${codeStyle}`}>
        {statusCode}
      </p>
      <h1 className={`${titleStyle}`}>
        {title}
      </h1>
      <p className={`${descriptionStyle}`}>
        {description}
      </p>
      <Button href="/" variant="solid" color="slate" className="mt-4 text-lg">
        Return to Home
      </Button>
    </div>
  )
}

export default ErrorLayout;