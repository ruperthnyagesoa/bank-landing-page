export const Parag = ({className, content}) => {
  return(
    <p className={className} >{content}</p>
  )
}
export const Title = ({isHeading, content, className}) => {
  return ( 
    
    isHeading ? <h1 className={className}>{content}</h1> : <h2 className={className}>{content}</h2>
    
   );
}

