export const titleStyle = 'text-center text-3xl'

const PageTitle = ({title}: {title: string}) => {
  return (
    <h1 className={`${titleStyle}`}>
      {title}
    </h1>
  )
};

export default PageTitle;
