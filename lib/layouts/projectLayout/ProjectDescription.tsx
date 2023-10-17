const descriptionPositioning = 'w-1/2 h-full'
const descriptionFont = 'text-lg'

const ProjectDescription = ({description}: {description: string}) => {
  return (
    <div className={`${descriptionPositioning} ${descriptionFont}`}>
      {description}
    </div>
  )
};

export default ProjectDescription;
