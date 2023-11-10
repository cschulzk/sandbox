const descriptionPositioning = 'w-full md:w-1/2 md:h-full'
const descriptionFont = 'text-lg'

const ProjectDescription = ({description}: {description: string}) => {
  return (
    <div className={`${descriptionPositioning} ${descriptionFont}`}>
      {description}
    </div>
  )
};

export default ProjectDescription;
