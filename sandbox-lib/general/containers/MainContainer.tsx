export const Container = ({ 
  className,
  children,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode; 
}) => {
  return (
    <div 
      className={`mx-auto w-full max-w-2xl lg:max-w-5xl relative px-4 ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}
